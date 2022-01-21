// TODO: refactor into an Nx Executor
const createDesktopShortcut = require('create-desktop-shortcuts');

const shortcutsCreated = createDesktopShortcut({
  windows: {
    // REQUIRED: Path must exist
    filePath: 'C:\\Program Files\\nodejs\\node.exe',
    // OPTIONAL: Defaults to the Desktop of the current user (by asking Windows specifically where it is located)
    outputPath: '%AppData%\\Microsoft\\Windows\\Start Menu\\Programs',
    // OPTIONAL: defaults to the filePath file's name (without the extension)
    name: 'create-nx-workspace-quick',
    // OPTIONAL: File must exist and be ICO, EXE, or DLL
    // icon: 'C:\\path\\to\\file.ico',
    // OPTIONAL
    arguments:
      'C:\\Users\\alexd\\Documents\\Github\\nx-quick-script\\dist\\apps\\nx-quick\\main.js',
    // OPTIONAL
    hotkey: 'ALT+CTRL+N',
  },
});

// returns true if everything worked correctly, or false if it could not create the icon or set its permissions
console.log(shortcutsCreated);
