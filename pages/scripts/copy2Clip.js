/*
All this code in this file was taken from StackOverFlow
because why rewrite the wheel
Source: https://stackoverflow.com/a/30810322/17493527
*/
function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying url to clipboard was " + msg);
    } catch (err) {
        prompt("Fallback: Failed to auto copy please copy from below:", text);
    }

    document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(
        () => {
			console.log("Copying url to clipboard was successful!");
		},
        () => {
			fallbackCopyTextToClipboard(text);
		}
    );
}
