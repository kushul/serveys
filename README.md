# Please follow steps:

## Setup
# SETUP API

cd surveys
npm install
node_modules/http-server/bin/http-server ./
# API is now available on http://localhost:8080/api/XXXX.json

# SETUP VUE
cd surveys/frontend
npm install
npm run serve
# VUE is now running on http://localhost:8081/ 

## Important notes

Run the following command to get a private chrome browser due to CORS policy.

Mac:
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

Linux:
google-chrome --disable-web-security

## Key aspects
- Used Vuetify 2+ to follow proper design (material design)
- Used axios to make http request
- Centralized store for all the components in the application (vuex - survey.js)
- Fully responsive (mobile friendly)
- Darkmode version available (toggle in footer - vuex - ui.js)
- Added loading status
- Used vue-chartjs for data visualization
- Meta tag
- Favicon
- page 404
- vuejs best practices (shared components, router, store)
- Page transition

## Notes
Survey Listing: 
- Search input on the survey list to filter surveys by names and/or code.
- Sort names or codes (ascending or descending)
- Table Pagination (if we have more surveys)
- Table no data slot
- Table loading status
- Action button for sinfle survey full view

Single Survey:
- Aggregate data for each survey has been accessed using axios & router
- QCM: ordered product and represent on a barchart
- Numeric: Calculate percentage for each product compared to other products and represent on a doughnut chart:
[(percProduct = (product / totalProducts) * 100), 100 - percProduct]
- Date: sort, filter date and represent on a timeline


### END ###
