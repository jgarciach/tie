#tie
Time Invesment Estimation for Pocket

##About
When you open an article in pocket, tie automatically adds under the article's title an estimation of how long it would take you to read that article. Tie assumes a reading speed of 200 wpm.

##Using tie
Tie is a chrome extension. 
You must use Chrome as your browser. ![Download Chrome](https://www.google.com/chrome/browser/)
###Download the extension
Clone this repository to your computer.
Copy paste this into your terminal:
`git clone https://github.com/jgarciach/tie.git`
###Load the extension
Extensions that you download from the Chrome Web Store are packaged up as `.crx` files, which is great for distribution, but not so great for development. Recognizing this, Chrome gives you a quick way of loading up your working directory for testing. Let's do that now.

1. Visit `chrome://extensions` in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars ![Menu Icon](assets/hotdogmenu.png?raw=true) and select **Extensions** under the **Tools** menu to get to the same place).
2. Ensure that the **Developer mode** checkbox in the top right-hand corner is checked.
3. Click **Load unpacked extension**… to pop up a file-selection dialog.
4. Navigate to the directory in which your extension files live, and select it.
  
Alternatively, you can drag and drop the directory where your extension files live onto `chrome://extensions` in your browser to load it.
If the extension is valid, it'll be loaded up and active right away! If it's invalid, an error message will be displayed at the top of the page. Correct the error, and try again.
