"use client";

import { Typography, Button, Input, Checkbox, Space } from "antd";

const { Title, Paragraph, Text } = Typography;

export default function PricingPage() {
  const handleTakeSurveyClick = () => {
    window.open(
      "https://qualtricsxmxgbgmdqqg.yul1.qualtrics.com/jfe/preview/previewId/9a3bd3c9-6a32-47e1-b439-ed6c4949e81b/SV_1RkAzL1J9jsIUjY?Q_CHL=preview&Q_SurveyVersionID=current",
      "_blank"
    );
  };

  return (
    <div
      style={{
        padding: "50px 20px",
        textAlign: "center",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      {/* Main Title */}
      <Title level={1} style={{ color: "#101010", marginBottom: "20px" }}>
        Heron Analytica is
        <br />
        launching soon
      </Title>

      {/* Survey Section */}
      <Paragraph
        style={{
          fontSize: "18px",
          marginBottom: "30px",
          color: "#6F7CB2",
          fontWeight: "bold",
        }}
      >
        Complete our quick survey
        <sup>1</sup> for a chance to win a $100 Amazon gift card
        <sup>2,3</sup> <br />
        Or join the waitlist for early access at no cost and receive the latest
        updates.
      </Paragraph>

      <Button
        type="primary"
        size="large"
        style={{
          backgroundColor: "#001F54",
          borderColor: "#001F54",
          fontSize: "20px",
          padding: "10px 30px",
          color: "#FFFFFF",
          marginBottom: "40px",
          height: "auto",
        }}
        onClick={handleTakeSurveyClick} // Open survey link in a new tab
      >
        Take the survey now
      </Button>

      {/* Notes Section */}
      <Space
        direction="vertical"
        size="small"
        style={{
          display: "block",
          textAlign: "left",
          margin: "0 auto",
          maxWidth: "600px",
        }}
      >
        <Text
          type="secondary"
          style={{
            color: "#6F7CB2",
          }}
        >
          <sup>1</sup> The deadline to complete the survey is Jan 31, 2025.
        </Text>
        <Text
          type="secondary"
          style={{
            color: "#6F7CB2",
          }}
        >
          <sup>2</sup> Gift card is applicable to participants in North America
          only and is issued in USD. If issued in CAD, the value will be
          converted using the exchange rate at the time of issuance.
        </Text>
        <Text
          type="secondary"
          style={{
            color: "#6F7CB2",
          }}
        >
          <sup>3</sup> Each participant is eligible for 1 entry only.
        </Text>
      </Space>

      {/* Waitlist Section */}
      <Title level={2} style={{ color: "#101010", margin: "80px 0 20px" }}>
        Or Join Waitlist
      </Title>
      <Title level={4} style={{ marginBottom: "20px", color: "#6F7CB2" }}>
        WHY JOIN?
      </Title>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: "block",
          textAlign: "left",
          margin: "0 auto",
          maxWidth: "600px",
        }}
      >
        <div>
          <Text
            style={{
              fontWeight: "bold",
              color: "#6F7CB2",
            }}
          >
            • Exclusive Early Access At No Cost:
          </Text>
          &nbsp;
          <Text
            style={{
              color: "#6F7CB2",
            }}
          >
            Experience psychographic and demographic personas and insights
            before anyone else at no cost.
          </Text>
        </div>
        <div>
          <Text
            style={{
              fontWeight: "bold",
              color: "#6F7CB2",
            }}
          >
            • Priority Support:
          </Text>
          &nbsp;
          <Text
            style={{
              color: "#6F7CB2",
            }}
          >
            Get hands-on onboarding and personal assistance.
          </Text>
        </div>
      </Space>

      {/* Waitlist Form */}
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <Space.Compact style={{ width: "100%" }}>
          <Input
            placeholder="Enter your email address"
            style={{
              maxWidth: "600px",
              padding: "0px 20px",
              fontSize: "16px",
              display: "inline-block",
            }}
          />
          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "#001F54",
              borderColor: "#001F54",
              color: "#FFFFFF",
              fontSize: "16px",
            }}
          >
            Join waitlist
          </Button>
        </Space.Compact>

        <div style={{ marginTop: "10px" }}>
          <Checkbox>I just want to receive updates.</Checkbox>
        </div>
        <Text style={{ display: "block", marginTop: "10px" }}>
          Join <strong>28</strong> others waiting for no-code customer
          segmentation.
        </Text>
      </div>
    </div>
  );
}
