var mandrill = require('../mandrill');
mandrill.call({
    "key": "<your key goes here>"
});

var opts = {
    "type": "messages",
    "call": "send-template",
    "template_name": "SignupApp",
    "template_content": [{
        "name": "example name",
        "content": "example content"
    }],
    "message": {
        "html": "<h1>Test Mail :)</h1>",
        "text": "Test mail from mandrill text",
        "subject": "some awesome subject",
        "from_email": "akarsh@lbbd.in",
        "from_name": "sender_name",
        "to": [{
            "email": "akarsh@lbb.in",
            "name": "user name"

        }],
        "headers": {
            "Reply-To": "message.reply@example.com"
        },
        "track_opens": true,
        "track_clicks": true,
        "auto_text": true,
        "url_strip_qs": true,
        "tags": ["test", "example", "sample"],
        "google_analytics_domains": ["werxltd.com"],
        "google_analytics_campaign": ["..."],
        "metadata": {
            "website": "www.lbb.in"
        }
    }
};
console.log(opts)
mandrill.call(opts, function (data) {
    console.log(data);
});
