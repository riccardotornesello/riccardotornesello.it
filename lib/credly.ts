import { Certification } from "./types"

export async function getCredlyCertifications() {
  const res = await fetch(
    "https://www.credly.com/users/riccardotornesello/badges?page=1&page_size=48&sort=rank",
    {
      headers: {
        accept: "application/json",
      },
      body: null,
      method: "GET",
    }
  )
  return res.json()
}

export async function parseCredlyCertifications(): Promise<Certification[]> {
  const response = await getCredlyCertifications()

  return response.data.map((c) => ({
    name: c.badge_template.name,
    issuingBody: c.issuer.entities[0].entity.name,
    date: c.issued_at_date.split("-").reverse().join("/"),
    pictureUrl: c.badge_template.image_url,
    credentialUrl: `https://www.credly.com/badges/${c.id}`,
  }))
}
