document.body.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nothing Here</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                min-height: 100vh;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            
            .container {
                text-align: center;
                padding: 40px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 20px;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
                border: 1px solid rgba(255, 255, 255, 0.18);
            }
            
            h1 {
                font-size: 3em;
                color: #fff;
                margin-bottom: 20px;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
            }
            
            p {
                font-size: 1.3em;
                color: rgba(255, 255, 255, 0.9);
                margin-bottom: 10px;
            }
            
            .emoji {
                font-size: 4em;
                margin: 20px 0;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="emoji">🔍</div>
            <h1>Nothing Here</h1>
            <p>There's nothing for you to find on this page.</p>
            <p style="font-size: 0.9em; margin-top: 30px; opacity: 0.8;">Move along...</p>
        </div>
    </body>
    </html>
`;