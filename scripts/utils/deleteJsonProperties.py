import os
import json

# This script will delete a property from all JSON files in the src/data folder

# Define the path to the src/data folder
data_folder = 'src/data'

# Set the name of the property to delete
playerPropertyNameToDelete = ''
teamPropertyNameToDelete = ''

# Iterate through each file in the folder
for filename in os.listdir(data_folder):
    if filename.endswith('.json'):
        file_path = os.path.join(data_folder, filename)
        
        # Open and load the JSON data
        with open(file_path, 'r') as file:
            data = json.load(file)
        
        #### PLAYER STATS ####
        # Check if 'playerResults' exists and is a dictionary
        if 'playerResults' in data and isinstance(data['playerResults'], dict):
            # Remove the specified property from each player in "playerResults"
            for player in data['playerResults'].values():
                if playerPropertyNameToDelete in player:
                    del player[playerPropertyNameToDelete]
                    
        #### TEAM STATS ####
        # Check if 'teamResults' exists and is a list
        if 'teamResults' in data and isinstance(data['teamResults'], list):
            for team in data['teamResults']:
                if isinstance(team, dict) and teamPropertyNameToDelete in team:
                    del team[teamPropertyNameToDelete]
        
        # Save the modified JSON data back to the file
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=4)