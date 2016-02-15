# Optimizely Non-bounce Rate

Google Analytics offers Bounce Rate as a metric for assessing success of a landing page. Bounced visitors count if they have visited only on page (and haven't triggered any event on it). Optimizely doesn't come with a bounce rate goal built in.

This code (copy to Project Javascript or place directly on your site) measures the opposite: visitors who went to at least two pages since the Optimizely experiment started. This is a good proxy for what is commonly looked at in Google Analytics (so, 30% bounce rate in Google Analytics means 70% non-bounce rate in Optimizely) and allows you to use Optimizely's Stats Engine while making a decision based on bounce rate.
