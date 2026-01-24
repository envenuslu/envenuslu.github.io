/*
    (PLEASE DO NOT DELETE THIS HEADER OR CREDIT!)

    User customizable settings below!
    Please refer to my guide over on https://virtualobserver.moe/ayano/comment-widget if you're confused on how to use this.
    The IDs at the top are a requirement but everything else is optional!
    Do not delete any settings even if you aren't using them! It could break the program.

    After filling out your options, just paste this anywhere you want a comment section
    (But change the script src URL to wherever you have this widget stored on your site!)

        <div id="c_widget"></div>
        <script src="comment-widget.js"></script>

    Have fun! Bug reports are encouraged if you happen to run into any issues.
    - Ayano (https://virtualobserver.moe/)
*/

// YOUR SETTINGS
const s_stylePath = '/comments/askbox-widget.css';
const s_formId = '1FAIpQLSeDFufmEKAemE7R7B7X43BetVg7D3Y-Jr73EfN-rr48YEcAHA';
const s_nameId = '692853141';
const s_websiteId = '523192927';
const s_textId = '1076649365';
const s_pageId = '448239334';

// Custom Labels
const s_widgetTitle = 'Ask me anything!';
const s_nameFieldLabel = 'Name';
const s_websiteFieldLabel = 'Social/Site (Optional)';
const s_textFieldLabel = 'Your Question';
const s_submitButtonLabel = 'Send Ask';
const s_successMessage = 'Your ask has been sent!.';

// Apply CSS
const c_cssLink = document.createElement('link');
c_cssLink.type = 'text/css';
c_cssLink.rel = 'stylesheet';
c_cssLink.href = s_stylePath;
document.getElementsByTagName('head')[0].appendChild(c_cssLink);

// HTML Structure
const v_mainHtml = `
    <details id="c_askDetails">
        <summary id="c_askSummary">${s_widgetTitle}</summary>
        
        <div id="c_inputDiv">
            <form id="c_form" onsubmit="handleAskSubmit();" method="post" target="c_hiddenIframe" action="https://docs.google.com/forms/d/e/${s_formId}/formResponse">

                <div id="c_nameWrapper" class="c-inputWrapper">
                    <label class="c-label c-nameLabel" for="entry.${s_nameId}">${s_nameFieldLabel}</label>
                    <input class="c-input c-nameInput" name="entry.${s_nameId}" id="entry.${s_nameId}" type="text" maxlength="16" placeholder="Anonymous">
                </div>

                <div id="c_websiteWrapper" class="c-inputWrapper">
                    <label class="c-label c-websiteLabel" for="entry.${s_websiteId}">${s_websiteFieldLabel}</label>
                    <input class="c-input c-websiteInput" name="entry.${s_websiteId}" id="entry.${s_websiteId}" type="url" pattern="https://.*">
                </div>

                <div id="c_textWrapper" class="c-inputWrapper">
                    <label class="c-label c-textLabel" for="entry.${s_textId}">${s_textFieldLabel}</label>
                    <textarea class="c-input c-textInput" name="entry.${s_textId}" id="entry.${s_textId}" rows="4" maxlength="500" required></textarea>
                </div>

                <input id="c_submitButton" name="c_submitButton" type="submit" value="${s_submitButtonLabel}">
            </form>
            <div id="c_successMessage" style="display:none;">${s_successMessage}</div>
        </div>
    </details>
`;

document.getElementById('c_widget').innerHTML = v_mainHtml;
const c_form = document.getElementById('c_form');
const c_submitButton = document.getElementById('c_submitButton');

function handleAskSubmit() {
    const nameInput = document.getElementById('entry.' + s_nameId);
    
    if (!nameInput.value || nameInput.value.trim() === "") {
        nameInput.value = "Anonymous";
    }

    c_submitButton.disabled = true;
    v_submitted = true;
}

let v_pagePath = window.location.pathname;
const c_pageInput = document.createElement('input');
c_pageInput.value = v_pagePath; c_pageInput.type = 'hidden';
c_pageInput.name = 'entry.' + s_pageId; 
c_form.appendChild(c_pageInput);

let v_submitted = false;
let c_hiddenIframe = document.createElement('iframe');
c_hiddenIframe.id = 'c_hiddenIframe'; c_hiddenIframe.name = 'c_hiddenIframe'; c_hiddenIframe.style.display = 'none'; 
c_hiddenIframe.setAttribute('onload', 'if(v_submitted){showSuccess()}');
c_form.appendChild(c_hiddenIframe);

function showSuccess() {
    v_submitted = false;
    document.getElementById('c_form').style.display = 'none';
    document.getElementById('c_successMessage').style.display = 'block';
}