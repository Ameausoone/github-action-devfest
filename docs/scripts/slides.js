// One method per module
function intro() {
  return ['01-Intro/00-title.md', '01-Intro/01-speaker-ame.md','01-Intro/02-experience.md'];
}

function cicd_journey() {
  return ['02-cicd-journey/00-small-history.md']
}

function then_github_action() {
  return ['03-then-github-action/00-intro.md','03-then-github-action/01-how-it-works.md','03-then-github-action/02-actions.md']
}

function github_actions_use_it() {
  return ['04a-github-actions-use-it/00-what-is.md', '04a-github-actions-use-it/01-security.md']
}

function github_actions_how_to_write() {
  return ['04b-github-actions-how-to-write/00-how-to-write.md']
  // TODO ,'04b-github-actions-how-to-write/01-advise-to-write.md'
}

function finish(){
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

export function usedSlides() {
  return formation();
}
