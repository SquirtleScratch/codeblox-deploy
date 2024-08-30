# path: __tests__/cucumberjs/features/example.feature

Feature: Basic arithmetic

  Scenario: Adding two numbers
    Given I have the numbers 5 and 3
    When I add them together
    Then the result should be 8
