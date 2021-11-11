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
  width: 6,
  link: './about'
}, {
  id: 1,
  title: 'SERVICES',
  content: 'With the power of 40 years of experience in logistics, warehousing and distribution, Prober Logistics offers all the instruments of integrated logistics.',
  textWhite: true,
  showContent: false,
  imageURL: 'resimler/8.jpg',
  color: 'purple',
  Icon: GrSettingsOption,
  width: 3,
  link: ''
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
  width: 3,
  link: './sheq'
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
  width: 3,
  link: ''
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
  width: 3,
  link: ''
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
  width: 6,
  link: ''
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
  width: 4,
  link: 'https://www.forbes.com/sites/ryder/2021/03/01/video-unveiling-the-future-of-logistics/?sh=2ebf673b30a3'
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
  width: 4,
  link: 'https://www.dw.com/en/covid-19-vegetarians-vegans-get-less-sick/av-58147508'
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
  width: 4,
  link: ''
}]

export const services = [{
  slug: "road-freight",
  title: "ROAD FREIGHT",
  content: `Since the day it was founded, Prober Logistics performs direct and 3PL international road
transport services to Europe, Middle East, and Far East countries.We provide partial and full load
transportation services with regular departures and dependence on transit times.With its joint
venture, Prober Logistics has the strength of 500+ trucks in its fleet.Prober Logistics has achieved
this trustworthiness in the sector by sharing timely and accurate information with its customers as a
result of its principle of honesty.`
}, {
  slug: "sea-freight",
  title: "SEA FREIGHT",
  content: `
    "Import / Export - FCL &amp; LCL Container Transportations", <br />
    "Supply of Special Equipment", <br />
    "Bulk Loading Service", <br />
    "Front / Last Transport Organizations", <br />
    "Warehouse Solutions", <br />
    "Domestic / Overseas Customs and Insurance Transactions"
  `
}, {
  slug: "air-freight",
  title: "AIR FREIGHT",
  content: `Scheduled / Priority Services<br />
Chartering Service<br />
Consolidation<br />
Front / Last Transport Organizations<br />
Warehouse Solutions<br />
Domestic / Overseas Customs and Insurance Transactions`
}, {
  slug: "intermodal",
  title: "INTERMODAL",
  content: `Aim of intermodal transport model is sustainability, bringing positive economic,
environmental and social impacts to our business partners, therefore enhancing their brand value.
Prober Logistics with its valued partners, utilizes two different intermodal routes when linking Turkey
to Europe, Middle East &amp; Far East.`
}, {
  slug: "warehousing",
  title: "WAREHOUSING",
  content: `Prober Logistics provides bounded and unbounded warehouse management services which
are one of the most important part of &quot;Supply Chain Management&quot;. With the special projects to
customers, Prober Logistics carries KPI rates to better points every day. This allows the product unit
costs to drop with minimum error. With its sister company, Prober Logistics has the power of
managing a total of 100.000 M² bounded and unbounded warehouses in Istanbul, Gebze, Bursa &amp;
Bologna.`
}, {
  slug: "heavy-transport-special-projects",
  title: "HEAVY TRANSPORT & SPECIAL PROJECTS",
  content: `Prober Logistics can provide transportation of industrial machines, transformers, wind farms,
boilers, engineering vehicles, sheet metal and complete facility moving with the project-based
transport with strong global network establishment. We provide from door to door delivery to full
factory assembly operations as part of the logistics service according to customer needs.`
}, {
  slug: "fine-art-logistics",
  title: "FINE ART LOGISTICS",
  content: `Prober Logistics considers exhibition and museum installation as an artistic activity rather
than a commercial activity. With its expert team, Prober Logistics organizes the entire process
including careful packaging, unpacking, special crates, careful collection, transportation, assembly,
and hanging.`
}, {
  slug: "rail-freight",
  title: "RAIL FREIGHT",
  content: `Turkey - Iran route Class-A railfreight agency<br />
Domestic transport with closed and platform wagons<br />
Rail-Road Combined Transport Services<br />
Intermodal &amp; Multimodal Transportation<br />
Turkish ports with railway connections import/export transportation services<br />
Station - Terminal services<br />
Storage, Loading, Unloading services`
}, {
  slug: "domestic-transportation",
  title: "DOMESTIC TRANSPORTATION",
  content: `Project-based domestic logistics solutions<br />
Inner-city and inter-city macro / micro transportations<br />
Retail and cold chain transportation services<br />
Partial distribution organization<br />
Heavy goods project transportation<br />
Warehouse services`
}, {
  slug: "insurance",
  title: "INSURANCE",
  content: `Prober Logistics provides complete assurance for road, air, sea and rail transport. With the
assurance, Prober Logistics offers companies can cover all their goods under the logistics process
against all kinds of damage that may occur during the transportation, storage and loading and
unloading processes.`
}, {
  slug: "e-commerce-logistics",
  title: "E-COMMERCE LOGISTICS",
  content: `Prober Logistics have ability to establish e-logistics infrastructures specific to e-commerce
companies. With this ability Prober Logistics can provide service to all logistic service needs and

manage the process with the lowest cost and the most rational solutions. With the e-logistics system
created for companies individually, Prober Logistics can improve customer satisfaction and
profitability as the company grows in their field.`
}, {
  slug: "custom-clearance",
  title: "CUSTOMS CLEARANCE",
  content: `Our customs clearance services are carried out by Transmetro Customs Consultancy within
Prober Logistics. Our vision is to continue as a technology follower company with our strong,
dynamic, creative and experienced staff to produce customer focused projects and to provide quality
services in all cities in Turkey.`
}]