Feature: Login

        @LoginTest @LT1
        Scenario: Verify Successful login
            Given User on login screen
             When User enter login credentials "standard_user" and "secret_sauce"
              And User click on submit button
             Then User verify products page heading "Product" displayed


        @LoginTest @LT2
        Scenario Outline: Verify Successful login with multiple users
            Given User on login screen
             When User enter login credentials "<username>" and "<password>"
              And User click on submit button
             Then User verify products page displayed

        Examples:
                  | username                | password     |
                  | standard_user           | secret_sauce |
                  | performance_glitch_user | secret_sauce |