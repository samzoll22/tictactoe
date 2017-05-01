<html>
<title>Tic Tac Toe</title>
<head>
<link rel="stylesheet" type="text/css" href="styles.css" />
<script type="text/javascript" src="app.js"></script>       
</head>
<body onload="fnLoad()">
        <div class="container">
                <div>
                        <select id="grid">
                        </select>
                        <button name="NewGame" class="newGame" value="Start a New Game" onClick="fnNewGame()">Start a New Game</button>
                </div>
                <div class="minContainer">
                        <table class="row" id="game"></table>
                </div>
        </div>
</body>
</html>
