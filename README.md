# crypto-chart

Challenge: Cryptocurrency Charting Tool
Basic Requirements
Starting from scratch (blank index.html, blank app.jsx and blank server.js files), build a single-page app for viewing the historical price data for any cryptocurrency. Use:

ReactJS for all views and bundle with Webpack
Express to serve your app and all its assets
The CoinDesk API to retrieve all your data
ChartJS.org to display your time-series charts
Start building your app using a single, fixed currency symbol, Bitcoin (BTC), and a fixed date range of your choosing. Use a time-series chart and show closing prices only.

Reminder: Emphasis should be placed on creating well-defined interfaces, writing code with a clear separation of concerns, and using the principles of modularity, encapsulation, abstraction.

CoinDesk API Limitations
The decision to use the CoinDesk API rather than any other cryptocurrency API is largely based on the fact that it offers an unlimited number of requests. In exchange, CoinDesk requires that you include the text, "Powered by CoinDesk", beneath any visual representations of their data in your application.

As a trade-off for limitless requests, you will be forced to work exclusively with Bitcoin throughout the Basic Requirements, as CoinDesk only provides data for its Bitcoin Price Index (BPI) and does not offer data for other currencies. However, you may choose to represent the value of Bitcoin in either USD, EUR, or GBP.

You will be free to explore other cryptocurrencies via other APIs in Advanced Content!
