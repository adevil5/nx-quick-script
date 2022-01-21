import { environment } from '@env/environment';
import { execSync } from 'child_process';
import { join } from 'path';
import { args } from './parse-args';
import { prompt } from 'inquirer';

export interface NxQuickProps {
  workspaceName?: string;
}

export const run = async () => {
  const d = new Date();
  const utcDateString = `${d.getUTCFullYear()}-${(d.getUTCMonth() + 1)
    .toString()
    .padStart(2, '0')}-${d.getUTCDate()}-${d
    .getUTCHours()
    .toString()
    .padStart(2, '0')}-${d.getUTCMinutes().toString().padStart(2, '0')}-${d
    .getUTCSeconds()
    .toString()
    .padStart(2, '0')}`;

  let workspaceName = utcDateString;
  let answers: NxQuickProps;

  if (args.workspaceName) {
    workspaceName = args.workspaceName;
  } else {
    answers = await prompt<NxQuickProps>([
      {
        type: 'input',
        name: 'workspaceName',
        message: 'Workspace Name (e.g., org name)',
        default: utcDateString,
        validate(value) {
          return value.match(/^[a-zA-Z0-9-_]+$/)
            ? true
            : 'Workspace name must be alphanumeric and can contain hyphens and underscores';
        },
      },
    ]);
    workspaceName = answers.workspaceName;
  }

  console.log(
    '🚀 ~ file: nx-quick.ts ~ line 39 ~ run ~ workspaceName',
    workspaceName
  );
  const workspacePath = join(environment.workspacesDirectory, workspaceName);

  execSync(`cd ${environment.workspacesDirectory}`);
  execSync(`npx create-nx-workspace ${workspacePath}`);
  execSync(`cd ${workspaceName}`);
  execSync('code .');
};
