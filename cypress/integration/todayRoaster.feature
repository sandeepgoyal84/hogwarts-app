Feature: Test Today Roaster

    Scenario: Check when any professor absent at level 3 e.g. "Severus Snape"
        Given Ensure professor "Severus Snape" is present
        When Mark professor "Severus Snape" as absent
        Then Now student "Luna Lovegood" should have "Rubeus Hagrid" as assigned teacher
        
    Scenario: Check when professors absent at level 3 & level 2 e.g. "Severus Snape" & "Rubeus Hagrid"
        Given Ensure professor "Severus Snape" and "Rubeus Hagrid" are present
        When Mark professors "Severus Snape" and "Rubeus Hagrid" as absent
        Then Now student "Luna Lovegood" should have "Minerva McGonagall" as assigned teacher
    