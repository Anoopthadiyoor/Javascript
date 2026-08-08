<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Age Checker</title>
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Arial, sans-serif;
        background: linear-gradient(135deg, #e0f2fe, #f8fafc);
      }

      .card {
        width: 320px;
        height: 320px;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 28px;
      }

      h2 {
        margin: 0 0 24px;
        font-size: 2rem;
        color: #0f172a;
        text-align: center;
      }

      input {
        width: 100%;
        padding: 12px 14px;
        border: 1px solid #cbd5e1;
        border-radius: 10px;
        font-size: 1rem;
        margin-bottom: 18px;
        outline: none;
      }

      input:focus {
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
      }

      button {
        padding: 12px 20px;
        border: none;
        border-radius: 10px;
        background: #2563eb;
        color: white;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
      }

      button:hover {
        background: #970fac;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h2>Age Checker</h2>
      <input type="text" placeholder="Enter your age"  id="agevalue"/>
      <button onclick="agechecker()">Check</button>
    </div>
  </body>
  <script>
    function agechecker(){
        const age=document.getElementById("agevalue").value
        console.log(age);
        if(age>=18){
            alert("you are eligible" );
        }
        else{
            alert("you are not eligible ");
        }
    }
  </script>
</html>
