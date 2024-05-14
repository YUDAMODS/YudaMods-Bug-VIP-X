   case 'scrape': case 'proxy':{
              exec(`node scrape.js`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          replygcxeon(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          replygcxeon(`Error: ${stderr}`);
          return;
        }
        replygcxeon(`Success GET PROXY FRESH BY @YUDAMODS`);
      });  
                         }
                break