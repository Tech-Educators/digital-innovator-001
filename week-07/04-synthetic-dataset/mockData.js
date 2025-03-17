const dataset = [
  {
    customer_number: "CUST_001",
    customer_name: "John Smith",
    support_agent: "Emily Carter",
    date_of_interaction: "2024-02-01",
    transcript_of_conversation: [
      {
        customer:
          "Hi, I just wanted to check on my booking for the First Aid at Work course next month. I haven't received a confirmation email yet.",
        agent:
          "Hello John, I’m happy to check that for you. Let me pull up your details... I can see your booking was successfully submitted, but it looks like the confirmation email may not have gone through. I’ll resend that now—could you check your inbox in a few minutes?",
      },
      {
        customer:
          "Oh, okay. I’ll check and let you know if I don’t get it. Thanks!",
        agent: "You’re welcome! Let me know if there’s anything else I can do.",
      },
    ],
    customer_satisfaction_score: 4,
    resolution_status: "Resolved",
  },
  {
    customer_number: "CUST_001",
    customer_name: "John Smith",
    support_agent: "Rebecca Green",
    date_of_interaction: "2024-02-18",
    transcript_of_conversation: [
      {
        customer:
          "I’m beyond frustrated now. No one has given me a proper solution. I NEED this sorted today!",
        agent:
          "John, I hear you. I can only imagine how frustrating this has been. We’ve arranged for an alternative course provider to guarantee you a place this week. Would that work for you?",
      },
      {
        customer:
          "I suppose I don’t have a choice, do I? I just wish this had been handled properly from the start.",
        agent:
          "I completely understand. I’ll make sure everything is processed correctly this time. You’ll receive an email confirmation within the next 30 minutes.",
      },
    ],
    customer_satisfaction_score: 2,
    resolution_status: "Resolved",
  },
  {
    customer_number: "CUST_002",
    customer_name: "Lisa Turner",
    support_agent: "Daniel Hughes",
    date_of_interaction: "2024-03-03",
    transcript_of_conversation: [
      {
        customer:
          "Hi, I need to change the date of my Fire Safety Awareness course. Something’s come up, and I won’t be available on the original date.",
        agent:
          "Hello Lisa, I can certainly help with that. Let me check availability for alternative dates... I see that there’s an open spot the following week. Would that work for you?",
      },
      {
        customer:
          "Yes, that should be fine. Can you confirm that my booking has been moved?",
        agent:
          "Absolutely! I’ve just updated it, and you should receive a new confirmation email shortly.",
      },
    ],
    customer_satisfaction_score: 5,
    resolution_status: "Resolved",
  },
  {
    customer_number: "CUST_002",
    customer_name: "Lisa Turner",
    support_agent: "James Walker",
    date_of_interaction: "2024-03-10",
    transcript_of_conversation: [
      {
        customer:
          "Hi, I still haven’t received a new confirmation email for my rescheduled Fire Safety Awareness course. Is it definitely changed?",
        agent:
          "I’m so sorry about that, Lisa. I can see the update was processed, but the confirmation email might not have gone through. I’ll send it again right now—please check your inbox in a few minutes.",
      },
      {
        customer:
          "Okay, I’ll check. Just making sure I don’t turn up at the wrong time!",
        agent:
          "That makes complete sense. If you don’t receive it within 15 minutes, let me know, and I’ll send a manual confirmation.",
      },
    ],
    customer_satisfaction_score: 4,
    resolution_status: "Resolved",
  },
  {
    customer_number: "CUST_003",
    customer_name: "Michael Reynolds",
    support_agent: "Sophia Patel",
    date_of_interaction: "2024-03-05",
    transcript_of_conversation: [
      {
        customer:
          "Hi, I need to cancel my booking for the Manual Handling course. I won’t be able to attend.",
        agent:
          "Hello Michael, I can help with that. Just to confirm, do you want a refund, or would you like to reschedule for a later date?",
        customer: "A refund, please. I won’t be able to attend at all.",
      },
      {
        agent:
          "Understood. I’ve submitted the cancellation request, and your refund should be processed within 5–7 business days.",
      },
    ],
    customer_satisfaction_score: 5,
    resolution_status: "Resolved",
  },
  {
    customer_number: "CUST_003",
    customer_name: "Michael Reynolds",
    support_agent: "Emily Carter",
    date_of_interaction: "2024-03-15",
    transcript_of_conversation: [
      {
        customer:
          "I was told my refund would be processed within a week, but I still haven’t received it. What’s going on?",
        agent:
          "I completely understand your frustration, Michael. Let me check on the status... It looks like the refund was approved but hasn’t been issued yet. I’ll contact the finance team to push it through today.",
      },
      {
        customer: "This is a bit concerning. I was expecting it by now.",
        agent:
          "I completely understand. I’ll ensure it’s processed today, and I’ll follow up with you via email once it’s confirmed.",
      },
    ],
    customer_satisfaction_score: 3,
    resolution_status: "Pending",
  },
  {
    customer_number: "CUST_003",
    customer_name: "Michael Reynolds",
    support_agent: "Rebecca Green",
    date_of_interaction: "2024-03-18",
    transcript_of_conversation: [
      {
        customer:
          "It’s been over two weeks, and I still don’t have my refund. This is unacceptable.",
        agent:
          "Michael, I sincerely apologise for the delay. I can see that the request was escalated, but it hasn’t been completed yet. I’m going to prioritise this right now and ensure you receive your refund by the end of the day.",
      },
      {
        customer:
          "I’ll believe it when I see it. I shouldn’t have had to chase this up multiple times.",
        agent:
          "I completely understand why you’re frustrated. I’ll send you a confirmation as soon as the refund is processed.",
      },
    ],
    customer_satisfaction_score: 2,
    resolution_status: "Resolved",
  },
];
