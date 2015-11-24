var mandrill = require('../mandrill');
mandrill.call({"key":"<key goes here>"})

var opts = {
  "type": "messages",
  "call": "send",
  "message": {
    "html": "<h1>Test Mail :)</h1>",
    "text": "Test mail from mandrill text",
    "subject": "some awesome subject",
    "from_email": "akarsh@lbbd.in",
    "from_name": "example from_name",
    "to": [{
      "email": "akarsh@lbbd.in",
      "name": "Wes Widner"
    }],
    "headers": {
      "...": "..."
    },
    "track_opens": true,
    "track_clicks": true,
    "auto_text": true,
    "url_strip_qs": true,
    "tags": ["test", "example", "sample"],
    "google_analytics_domains": ["werxltd.com"],
    "google_analytics_campaign": ["..."],
    "metadata": ["..."]
  }
};

mandrill.call(opts, function (data) {
  console.log(data);
  process.exit(0);
});
