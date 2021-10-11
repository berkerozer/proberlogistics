import { FaBeer, FaTrain } from 'react-icons/fa';
import { IoBusiness, IoGitNetworkSharp } from 'react-icons/io5';
import { GrServices, GrContactInfo, GrSettingsOption } from 'react-icons/gr';
import { GiHealingShield } from 'react-icons/gi'
import { BsVectorPen, BsFlower3 } from 'react-icons/bs'
import { MdModelTraining } from 'react-icons/md'

export const cards = [{
  id: 0,
  title: 'COMPANY',
  content: `Prober Logistics has acquired superior service quality habit with honesty, transparency,
reliability, and lucidity. Prober Logistics produces the most rational solutions with timely, cost-
efficient, socially and environmentally sensitive service principles to all of its customers as a solution
partner.`,
  textWhite: false,
  showContent: false,
  imageURL: 'resimler/0.jpg',
  color: 'blue',
  Icon: IoBusiness,
  width: 6
}, {
  id: 1,
  title: 'SERVICES',
  content: 'Real-time order preparation (on request), specific added-value services on industrial products, high-tech, food and pharmaceuticals (labelling, packaging, special offer packs, assembly, etc.).',
  textWhite: true,
  showContent: false,
  imageURL: 'resimler/8.jpg',
  color: 'purple',
  Icon: GrSettingsOption,
  width: 3
},
{
  id: 2,
  title: 'SHEQ',
  content: `Prober Logistics aims to meet and, where possible, exceed our industries’ strict
Safety, Health, Environment and Quality (SHEQ) standards and regulations.`,
  textWhite: true,
  showContent: true,
  imageURL: 'resimler/2.jpg',
  color: 'green',
  Icon: GiHealingShield,
  width: 3
},
{
  id: 3,
  title: 'NETWORK',
  content: 'Logistic customers are served by a Logistics Network, and by worldwide offices and distribution facilities staffed by dedicated teams of experts.',
  textWhite: true,
  showContent: false,
  imageURL: 'cardimages/3.jpg',
  color: 'red',
  Icon: IoGitNetworkSharp,
  width: 3
},
{
  id: 4,
  title: 'GET A QUOTE',
  content: 'Need a quote? Submit your service enquiry. ',
  textWhite: true,
  showContent: false,
  imageURL: 'resimler/5.jpg',
  color: 'black',
  Icon: BsVectorPen,
  width: 3
},
{
  id: 5,
  title: 'SUPPLY CHAIN MANAGEMENT',
  content: 'Port performance and land-side logistics chains are critical to facilitate innovation, productivity gains and economic growth in Italy.',
  textWhite: true,
  showContent: false,
  imageURL: 'resimler/11.jpg',
  color: 'lime',
  Icon: MdModelTraining,
  width: 6
},
{
  id: 6,
  title: 'FUTURE OF LOGISTICS',
  content: 'Speed and agility – the key to getting fashion products out of Italy on time',
  textWhite: true,
  showContent: true,
  imageURL: 'cardimages/8.jpg',
  color: 'brown',
  Icon: FaTrain,
  width: 4
},
{
  id: 7,
  title: 'GOOD NEWS',
  content: 'Wanna hear some good news?',
  textWhite: true,
  showContent: false,
  imageURL: 'resimler/fide-resim.jpg',
  color: 'lila',
  Icon: BsFlower3,
  width: 4
},
{
  id: 8,
  title: 'CONTACT',
  content: `Istanbul HQ, Turkey <br>Bursa, Turkey <br> Tirana, Albenia`,
  textWhite: false,
  showContent: false,
  imageURL: 'resimler/0.jpg',
  color: 'leef',
  Icon: GrContactInfo,
  width: 4
}]