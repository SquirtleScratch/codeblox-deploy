   echo "Processing deploy.sh"

    # Set the EB BUCKET (you can find this in S3 service within AWS)
    EB_BUCKET=elasticbeanstalk-us-east-2-975200498948

    # Set the default region for the AWS CLI
    aws configure set default.region us-east-2

    # Log in to Elastic Container Registry
    eval $(aws ecr get-login --no-include-email --region us-east-2)

    # Build the Docker image based on our production Dockerfile
    docker build -t codebloxes/codeblox-prod -f .docker/dockerfiles/Dockerfile .

    # Tag the image with the GitHub SHA
    docker tag codebloxes/codeblox-prod:latest 975200498948.dkr.ecr.us-east-2.amazonaws.com/codeblox:$GITHUB_SHA

    # Push the built image to Elastic Container Registry
    docker push 975200498948.dkr.ecr.us-east-2.amazonaws.com/codeblox:$GITHUB_SHA

    # Use Linux's 'sed' command to replace '<VERSION>' in our Dockerrun file with the GitHub SHA key
    sed -i='' "s/<VERSION>/$GITHUB_SHA/" Dockerrun.aws.json

    # Zip up the entire repository, along with the modified Dockerrun file and our .ebextensions directory
    zip -r codeblox.zip . -x "*.git*" "*.github*" "*.DS_Store" "node_modules/*"

    # Upload the zipped file to our S3 bucket
    aws s3 cp codeblox.zip s3://$EB_BUCKET/codeblox.zip

    # Create a new application version
    aws elasticbeanstalk create-application-version --application-name tes4321 --version-label $GITHUB_SHA --source-bundle S3Bucket=$EB_BUCKET,S3Key=codeblox.zip

    # Update the environment to use the new version number
    aws elasticbeanstalk update-environment --environment-name test4321-env --version-label $GITHUB_SHA