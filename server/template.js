export default ({ html, helmet }) => {
  // return `<!DOCTYPE html>
  // 		<html ${helmet.htmlAttributes.toString()}>
  // 			<head>
  // 				${helmet.title.toString()}
  // 				${helmet.meta.toString()}
  // 				${helmet.link.toString()}
  // 			</head>
  // 			<body ${helmet.bodyAttributes.toString()}>
  // 				<div id="root">${markup}</div>
  // 				<script src="/dist/client.js" async></script>
  // 			</body>
  //     </html>`;
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    </head>
    
    <body>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <div id="root">${html}</div>
    </body>
    
    </html>`;
};
