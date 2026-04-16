/**
 * SQUADIA API SERVICES
 * This file handles connections to Notion (Blog) and Airtable (Formations, Cas Clients).
 * You will need to provide your API tokens and Base IDs in the .env file.
 */

// Placeholder for Notion API call
export const fetchBlogPosts = async () => {
  try {
    // In a real scenario, this would call a backend server or a serverless function 
    // to avoid exposing Notion tokens on the frontend.
    console.log("Fetching Notion blog posts...");
    return [
      { id: 1, title: "L'IA dans le B2B : Au-delà de la hype", slug: "ia-b2b-hype", date: "2026-03-01", category: "Stratégie" },
      { id: 2, title: "Automatiser sa prospection LinkedIn sans se faire bannir", slug: "automatisation-linkedin", date: "2026-02-15", category: "Leads" }
    ];
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    return [];
  }
};

// Placeholder for Airtable API call (Cas Clients)
export const fetchClientCases = async () => {
  try {
    console.log("Fetching Airtable client cases...");
    return [
      { id: 1, title: "TechCorp", kpi: "+82%", sector: "SaaS", persona: "Dir. Sales" },
      { id: 2, title: "ManuFact", kpi: "+40%", sector: "Industrie", persona: "Dir. Marketing" }
    ];
  } catch (error) {
    console.error("Error fetching Airtable data:", error);
    return [];
  }
};

// Placeholder for Airtable API call (Formations)
export const fetchCourses = async () => {
  try {
    console.log("Fetching Airtable courses...");
    return [
      { id: 1, title: "IA pour Sales", duration: "2J", level: "Intermédiaire" },
      { id: 2, title: "IA pour Marketing", duration: "2J", level: "Avancé" }
    ];
  } catch (error) {
    console.error("Error fetching Airtable data:", error);
    return [];
  }
};
