export const SITE = {
  name: 'Sowing Seeds of Hope Africa',
  shortName: 'Seeds of Hope',
  title: 'Sowing Seeds of Hope Africa | Education and Care in Uganda & Kenya',
  description:
    'A nonprofit walking with communities in Uganda and Kenya through schools, medical care, and school-fee support.',
  url: 'https://sowingseedsofhopeafrica.org',
  donateUrl: 'https://bottles2bricks.org/uganda/',
  email: 'hello@sowingseedsofhopeafrica.org',
  taxStatus: '501(c)(3) pending',
  ogImage: '/images/home/planting.jpg',
}

export type Photo = {
  src: string
  alt: string
  width: number
  height: number
}

export const ugandaGallery: Photo[] = [
  {
    src: '/images/uganda/classroom-teacher.png',
    alt: 'Students at wooden desks in a rural Uganda classroom, with a teacher helping nearby',
    width: 900,
    height: 1200,
  },
  {
    src: '/images/uganda/uniforms-line.png',
    alt: 'Children in yellow and green school uniforms standing in a line outside a wooden classroom',
    width: 1024,
    height: 575,
  },
  {
    src: '/images/uganda/papa-joe-seedlings.png',
    alt: 'Children holding seedlings in front of Papa Joe Kindergarten School in Omukidandari',
    width: 1600,
    height: 1067,
  },
  {
    src: '/images/uganda/classroom-phonics.png',
    alt: 'Young students writing at benches beneath handmade phonics posters',
    width: 900,
    height: 1200,
  },
  {
    src: '/images/uganda/graduation.png',
    alt: 'Kindergarten graduates in navy and orange gowns celebrating outdoors',
    width: 900,
    height: 1200,
  },
  {
    src: '/images/uganda/construction.png',
    alt: 'A wooden school building under construction beside banana trees in rural Uganda',
    width: 900,
    height: 1200,
  },
  {
    src: '/images/uganda/aid-child.png',
    alt: 'A volunteer handing a small aid packet to a young girl outside a brick building',
    width: 900,
    height: 1200,
  },
  {
    src: '/images/uganda/laudato-si.png',
    alt: 'Adults in matching purple shirts standing with schoolchildren against a green hillside',
    width: 1600,
    height: 1067,
  },
]

export const kenyaGallery: Photo[] = [
  {
    src: '/images/home/planting.jpg',
    alt: 'Hands gathering around a seedling being planted, a picture of school-fee support taking root in Kenya',
    width: 1920,
    height: 720,
  },
  {
    src: '/images/home/welcome.jpg',
    alt: 'Friends and supporters gathered together in partnership',
    width: 1200,
    height: 1000,
  },
]

export const schoolGallery: Photo[] = [
  {
    src: '/images/uganda/classroom-lesson.png',
    alt: 'A teacher leaning over student worksheets in a sunlit wooden classroom',
    width: 900,
    height: 1200,
  },
  {
    src: '/images/uganda/classroom-distributing.png',
    alt: 'Children working at benches while a teacher distributes materials',
    width: 900,
    height: 1200,
  },
  {
    src: '/images/uganda/uniforms-plaid.png',
    alt: 'Students in yellow shirts and plaid jumpers standing in front of a log schoolhouse',
    width: 1600,
    height: 1067,
  },
  {
    src: '/images/uganda/uniforms-close.png',
    alt: 'A smaller class in matching yellow and green uniforms outside their school',
    width: 1600,
    height: 1067,
  },
  {
    src: '/images/uganda/papa-joe-school.png',
    alt: 'Children and a priest gathered at Papa Joe Kindergarten School after a community activity',
    width: 1600,
    height: 1067,
  },
  {
    src: '/images/uganda/st-florence.jpg',
    alt: 'Students of St. Florence Memorial School standing with teachers under the Ugandan flag',
    width: 800,
    height: 1067,
  },
]
