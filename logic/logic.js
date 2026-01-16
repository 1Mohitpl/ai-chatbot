async function handleBusinessLogic(userMessage) {

  // Example: Ticket status
  if (userMessage.toLowerCase().includes("ticket status")) {
    return "Please provide your Ticket ID to check the status.";
  }

  // Example: AMC query
  if (userMessage.toLowerCase().includes("amc")) {
    return "Our AMC includes maintenance, priority support, and upgrades.";
  }

  return null; // Let AI handle it
}

module.exports = { handleBusinessLogic };
