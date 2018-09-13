import emails from '../../../../data/emails'

const state = {
  sendTo: emails.sendTo,
  ccs: emails.ccs,
  subject: 'VCAPS Data Fix Request'
}

const actions = {
  // data is an object of the form:
  //  { summary, writer, reviewer, tester, details }
  sendEmail ({ state }, data) {
    const to = state.sendTo[0]
    const cc = state.ccs.length > 0 ? '&cc=' + state.ccs.join(';') : ''
    const sbj = '&subject=' + state.subject
    const body = '&body=' + emailTpl(data)

    window.location.href = 'mailto:' + to + cc + sbj + body
  }
}

export default {
  state,
  actions
}

function emailTpl (data) {
  const summary = data.summary
  const writer = data.writer
  const reviewer = data.reviewer
  const tester = data.tester
  const details = data.details === '' ? 'None' : data.details

  return `Hello All,
%0A%0A
This is a VCAPS Data Fix Request.
%0A%0A
Summary: ${summary}
%0A
Script Prepared by: ${writer}
%0A
Script Reviewed by: ${reviewer}
%0A
Script Prepared by: ${tester}
%0A
Details: ${details}
%0A%0A
Kind regards,
%0A%0A`
}
