const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async (req, res) => {
  const messageType = req.headers["x-amz-sns-message-type"];

  try {
    if (messageType === "SubscriptionConfirmation") {
      const { SubscribeURL } = JSON.parse(req.body);
      const response = await axios.get(SubscribeURL);
      console.log(response.data);
    } else if (messageType === "Notification") {
      const { Message } = JSON.parse(JSON.parse(req.body));
      /*
      Ví dụ về message nhận được, từ đây có được instance-id của instance có vấn đề (tại detail), từ đó xử lý graceful shutdown 
      {
        "version": "0",
        "id": "1e5527d7-bb36-4607-3370-4164db56a40e",
        "detail-type": "EC2 Spot Instance Interruption Warning",
        "source": "aws.ec2",
        "account": "123456789012",
        "time": "1970-01-01T00:00:00Z",
        "region": "us-east-1",
        "resources": [
          "arn:aws:ec2:us-east-1b:instance/i-0b662ef9931388ba0"
        ],
        "detail": {
          "instance-id": "i-0b662ef9931388ba0",
          "instance-action": "terminate"
        }
      }
      */
      // Graceful shutdown
    }
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;



      