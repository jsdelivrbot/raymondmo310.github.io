<script type="text/javascript">
    var websites = ["http://google.com", "http://reddit.com", "http://stackoverflow.com"];

function randomWebsite() {
    var website = websites[Math.floor(Math.random()*websites.length)];
    window.location = website;
}
</script>

<button type="button" onclick="randomWebsite();">Random website</button>