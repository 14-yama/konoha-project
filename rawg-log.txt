Task:

[]	fetchPlatforms
[] 	darkMode
[]  NoImageGames
[]  Secure API Key Management
[] 	gameMetaScore
[]	gameStats
[]	gameRatings
[] 	gameScreenShot
[]	gameTrailer
[] 	searchGames
[]  Refactor Game Grid
[]  rawg theme
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
How-To: Revert a file or entire project with one click on git
Solution:
Revert a File to a Previous Commit:

If you want to revert a single file to a previous state, you can use the following command:

bash
Copy code
git checkout <commit_hash> -- path/to/your/file
Replace <commit_hash> with the hash of the commit you want to revert to, and path/to/your/file with the path to the specific file you want to revert. This will replace the contents of the file with the contents from the specified commit.

Revert the Entire Project to a Previous Commit:

If you want to revert the entire project to a previous commit, you can create a new branch from the commit you want to revert to:

bash
Copy code
git checkout -b new_branch_name <commit_hash>
This will create a new branch based on the state of the project at the specified commit. You can then continue working on this branch as if it were a new starting point.

Reverting and Discarding Changes:

If you want to completely discard all changes made since a specific commit, you can use the git reset command:

bash
Copy code
git reset --hard <commit_hash>
Be cautious when using this command as it irreversibly discards changes. Only use it if you're certain you want to discard everything since that commit.

Interactive Rebase:

You can also use an interactive rebase to squash or drop commits, effectively "reverting" them:

bash
Copy code
git rebase -i <commit_hash>
In the interactive rebase interface, you can choose to squash or drop commits, which can help you revert changes selectively.

Git GUI Tools:

Many Git GUI tools provide more user-friendly interfaces for reverting changes and managing commits. Tools like Sourcetree, GitKraken, and GitHub Desktop often have options to easily revert changes to specific commits.

Remember that Git is a powerful tool with a wide range of features. While there isn't a true "one-click" solution, these commands and strategies can help you achieve the desired results based on your specific needs. Always ensure you have a backup or understanding of your project's state before making significant changes.

............................................................................................................................................
Revert a File to a Previous Commit:

Open your repository in GitKraken.
Find the file you want to revert in the file tree.
Right-click on the file and select "View File History."
In the file history panel, find the commit you want to revert to.
Right-click on that commit and select "Checkout This Commit."
Revert the Entire Project to a Previous Commit:

Open your repository in GitKraken.
Click on the "Branch" menu on the left sidebar.
Find the commit you want to revert to.
Right-click on that commit and select "Create New Branch Here."
Provide a name for the new branch.
Reverting and Discarding Changes:

Open your repository in GitKraken.
Click on the "Uncommitted Changes" section at the bottom of the screen.
You'll see a list of your uncommitted changes.
Right-click on the commit you want to reset to and select "Discard Changes."
Interactive Rebase:

GitKraken provides a visual interactive rebase interface:

Open your repository in GitKraken.
Click on the "Branch" menu on the left sidebar.
Find the commit you want to start the interactive rebase from.
Right-click on that commit and select "Rebase Interactive."
In the interactive rebase panel, you can choose to squash, edit, or drop commits.
Tasks:
[]  Sperations of Concerns:
src/
|-- components/
|   |-- GameCard.tsx
|   |-- TemplateArea.tsx
|   |-- FetchGames
|   |-- FetchGenres
|   |-- navBar
|-- hooks/
|   |-- useGameFetcher.tsx

|-- pages/
|   |-- Home.tsx
|   |-- About.tsx
|   |-- Contact.tsx
|-- services/
|   |-- api.tsx
|-- icons/
|   |-- PlatformIcons.ts
|-- App.tsx
|-- index.tsx

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
How-to: Shortcut to run compiler
Solution: 
-  Ctrl + Alt + N 
-  Ctrl + F5

Tasks:
[x]	fetchGames
[x]	fetchGenres
[x] Logo
[x] Displaying Platform Icons: Parent Platforms

Unresolved: How to revert to previous commits and add it to working file?
Solution: Go to the desired previous commit; File Changes: Open changes with working file

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Unresolved: How to revert to previous codes/commits
Solution: Use GitGraph- Checkout & git revert

Note: Use API keys for all fetches

Tasks:
[x]	recreate new rawg project in VS Code
[x]	copy existing node_module into rawg-io project folder
[x] create component: TemplateArea
[x] install VScode extension GitGraph 
