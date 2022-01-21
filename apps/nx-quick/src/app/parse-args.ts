import { parse } from 'ts-command-line-args';
import { NxQuickProps } from './nx-quick';

interface HelpFlag {
  help?: boolean;
}

// args typed as NxQuickArguments
export const args = parse<NxQuickProps & HelpFlag>(
  {
    workspaceName: {
      type: String,
      optional: true,
      alias: 'w',
      description: 'Workspace Name (e.g., org name)',
    },
    help: {
      type: Boolean,
      optional: true,
      alias: 'h',
      description: 'Prints this usage guide',
    },
  },
  {
    helpArg: 'help',
  }
);
