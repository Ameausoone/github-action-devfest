import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
// TODO add Romain
function intro() {
  return [
    '01-Intro/00-title.md',
    '01-Intro/01-speaker-ame.md',
    '01-Intro/02-speaker-rle.md',
    '01-Intro/03-experience.md',
    '01-Intro/04-survey.md'
  ]
}

function cicd_journey() {
  return [
    '02-cicd-journey/00-small-history.md'
  ]
}

function then_github_action() {
  return [
    '03-then-github-action/00-intro.md',
    '03-then-github-action/01-how-it-works.md',
    '03-then-github-action/02-actions.md'
  ]
}

// TODO remove demo

function github_actions_use_it() {
  return [
    '04a-github-actions-use-it/00-what-is.md',
    //'04a-github-actions-use-it/01-demo.md',
    //'04a-github-actions-use-it/01-demo-b.md',
    '04a-github-actions-use-it/02-security.md'
  ]
}

function github_actions_how_to_write() {
  return [
    '04b-github-actions-how-to-write/00-how-to-write.md',
    '04b-github-actions-how-to-write/01-github-slug-action.md',
    '04b-github-actions-how-to-write/02-github-slug-action-impl.md'
  ]
}

// TODO add new features

function finish() {
  return ['05-end/00-finish.md']
}

function formation() {
  return [
    //
    ...intro(),
    ...cicd_journey(),
    ...then_github_action(),
    ...github_actions_use_it(),
    ...github_actions_how_to_write(),
    ...finish()
  ].map(slidePath => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
