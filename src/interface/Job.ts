export interface Job {
    id: number,
    posted_at: string,
    posted_from: string,
    -title: string,
    -location: string,
    -responsibilities?: string,
    -we_offer?: string,
    -necessary_sklils?: string,
    -about_us?: string,
    -contact_information: [{phone: number, mail: string}],
    -deadLine: string,
    -work?: string,
    schedule?: string,
    suitable_for?: string,
    experience?: string,
    salary?: string,
    logoUrl: string
}