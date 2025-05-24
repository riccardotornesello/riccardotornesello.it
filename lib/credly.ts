import { Certification } from "./types"

interface CredlyCertification {
  id: string
  badge_template: {
    name: string
    image_url: string
  }
  issuer: {
    entities: {
      entity: { name: string }
    }[]
  }
  issued_at_date: string
}

export async function getCredlyCertifications(): Promise<
  CredlyCertification[]
> {
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
  const data = await res.json()
  return data.data
}

export async function parseCredlyCertifications(): Promise<Certification[]> {
  const response = await getCredlyCertifications()

  return response.map((c: CredlyCertification) => ({
    name: c.badge_template.name,
    issuingBody: c.issuer.entities[0].entity.name,
    date: c.issued_at_date.split("-").reverse().join("/"),
    pictureUrl: c.badge_template.image_url,
    credentialUrl: `https://www.credly.com/badges/${c.id}`,
  }))
}
