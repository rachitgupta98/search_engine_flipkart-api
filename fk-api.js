var rp = require("request-promise");
const details = require("./flipkart-api-details");
var headers = {
  "Fk-Affiliate-Id": details.Id,
  "Fk-Affiliate-Token": details.Token
};
const count = 10;

//creating data fetched from api and pushed to array

queryfeedlist = (query, callback) => {
  rp({
    url: `https://affiliate-api.flipkart.net/affiliate/1.0/search.json?query=${query}&resultCount=${count}`,
    headers: headers,
    json: true
  }).then(res => {
    let items = [];
    let data = res.products;
    for (let i = 0; i < count; i++) {
      const title = data[i].productBaseInfoV1.title;
      const imgUrl = data[i].productBaseInfoV1.imageUrls["800x800"];
      const inStock = data[i].productBaseInfoV1.inStock;
      const offers = data[i].productBaseInfoV1.offers;
      const price =
        "₹" + data[i].productBaseInfoV1.flipkartSpecialPrice["amount"];
      const rating = data[i].productShippingInfoV1.sellerAverageRating + "☆";
      const shipping_chrg =
        data[i].productShippingInfoV1.shippingCharges["amount"];
      const shipping_delivery =
        data[i].productShippingInfoV1.estimatedDeliveryTime;

      const specs = data[i].categorySpecificInfoV1.keySpecs;

      items.push({
        title,
        imgUrl,
        inStock,
        offers,
        price,
        rating,
        specs,
        shipping_chrg,
        shipping_delivery
      });
    }
    callback(items);
  });
};
module.exports = {
  queryfeedlist
};
