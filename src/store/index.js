import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import sliderS01 from '../assets/static/Katarina_home_10.jpg'
import sliderS02 from '../assets/static/Katarina_home_11.jpg'
import sliderS03 from '../assets/static/Katarina_home_12.jpg'
import sliderS04 from '../assets/static/Katarina_home_13.jpg'

export default new Vuex.Store({
  state: {
    // General
    showNav: true,
    titleLoading: false,
    months: [
      { name: "Jan", fullNameEng: "January", fullNameHr: "Siječanj", num: 1, numZero: "01", days: 31, weeks: [] },
      { name: "Feb", fullNameEng: "February", fullNameHr: "Veljača", num: 2, numZero: "02", days: 29, weeks: [] },
      { name: "Mar", fullNameEng: "March", fullNameHr: "Ožujak", num: 3, numZero: "03", days: 31, weeks: [] },
      { name: "Apr", fullNameEng: "April", fullNameHr: "Travanj", num: 4, numZero: "04", days: 30, weeks: [] },
      { name: "May", fullNameEng: "May", fullNameHr: "Svibanj", num: 5, numZero: "05", days: 31, weeks: [] },
      { name: "Jun", fullNameEng: "June", fullNameHr: "Lipanj", num: 6, numZero: "06", days: 30, weeks: [] },
      { name: "Jul", fullNameEng: "July", fullNameHr: "Srpanj", num: 7, numZero: "07", days: 31, weeks: [] },
      { name: "Aug", fullNameEng: "August", fullNameHr: "Kolovoz", num: 8, numZero: "08", days: 31, weeks: [] },
      { name: "Sep", fullNameEng: "September", fullNameHr: "Rujan", num: 9, numZero: "09", days: 30, weeks: [] },
      { name: "Oct", fullNameEng: "October", fullNameHr: "Listopad", num: 10, numZero: "10", days: 31, weeks: [] },
      { name: "Nov", fullNameEng: "November", fullNameHr: "Studeni", num: 11, numZero: "11", days: 30, weeks: [] },
      { name: "Dec", fullNameEng: "December", fullNameHr: "Prosinac", num: 12, numZero: "12", days: 31, weeks: [] }
    ],
    gallery: [
      {id: 1, src: () => import('../assets/photos/Katarina_outside_1.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 2, src: () => import('../assets/photos/Katarina_outside_2.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 3, src: () => import('../assets/photos/Katarina_outside_3.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 4, src: () => import('../assets/photos/Katarina_outside_4.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 5, src: () => import('../assets/photos/Katarina_outside_5.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 6, src: () => import('../assets/photos/Katarina_outside_6.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 7, src: () => import('../assets/photos/Katarina_outside_7.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 8, src: () => import('../assets/photos/Katarina_outside_8.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 9, src: () => import('../assets/photos/Katarina_outside_9.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 10, src: () => import('../assets/photos/Katarina_outside_10.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 11, src: () => import('../assets/photos/Katarina_outside_11.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 12, src: () => import('../assets/photos/Katarina_outside_12.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 13, src: () => import('../assets/photos/Katarina_outside_13.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 14, src: () => import('../assets/photos/Katarina_outside_14.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 15, src: () => import('../assets/photos/Katarina_outside_15.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 16, src: () => import('../assets/photos/Katarina_outside_16.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 17, src: () => import('../assets/photos/Katarina_outside_17.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 18, src: () => import('../assets/photos/Katarina_outside_18.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 19, src: () => import('../assets/photos/Katarina_outside_19.jpg'), alt: 'Katarina di Maladel', block: 7, class: 'width'},
      {id: 20, src: () => import('../assets/photos/Katarina_21.jpg'), alt: 'Katarina di Maladel', block: 3, class: 'width'},
      {id: 21, src: () => import('../assets/photos/Katarina_22.jpg'), alt: 'Katarina di Maladel', block: 3, class: 'width'},
      {id: 22, src: () => import('../assets/photos/Katarina_23.jpg'), alt: 'Katarina di Maladel', block: 3, class: 'width'},
      {id: 23, src: () => import('../assets/photos/Katarina_24.jpg'), alt: 'Katarina di Maladel', block: 3, class: 'width'},
      {id: 24, src: () => import('../assets/photos/Katarina_25.jpg'), alt: 'Katarina di Maladel', block: 3, class: 'width'},
      {id: 25, src: () => import('../assets/photos/Katarina_74.jpg'), alt: 'Katarina di Maladel', block: 2, class: 'width'},
      {id: 26, src: () => import('../assets/photos/Katarina_75.jpg'), alt: 'Katarina di Maladel', block: 2, class: 'width'},
      {id: 27, src: () => import('../assets/photos/Katarina_20.jpg'), alt: 'Katarina di Maladel', block: 2, class: 'width'},
      {id: 28, src: () => import('../assets/photos/Katarina_78.jpg'), alt: 'Katarina di Maladel', block: 2, class: 'width'},
      {id: 29, src: () => import('../assets/photos/Katarina_44.jpg'), alt: 'Katarina di Maladel', block: 4, class: 'width'},
      {id: 30, src: () => import('../assets/photos/Katarina_45.jpg'), alt: 'Katarina di Maladel', block: 4, class: 'width'},
      {id: 31, src: () => import('../assets/photos/Katarina_46.jpg'), alt: 'Katarina di Maladel', block: 4, class: 'width'},
      {id: 32, src: () => import('../assets/photos/Katarina_49.jpg'), alt: 'Katarina di Maladel', block: 4, class: 'width'},
      {id: 33, src: () => import('../assets/photos/Katarina_50.jpg'), alt: 'Katarina di Maladel', block: 4, class: 'width'},
      {id: 34, src: () => import('../assets/photos/Katarina_55.jpg'), alt: 'Katarina di Maladel', block: 5, class: 'width'},
      {id: 35, src: () => import('../assets/photos/Katarina_56.jpg'), alt: 'Katarina di Maladel', block: 5, class: 'width'},
      {id: 36, src: () => import('../assets/photos/Katarina_57.jpg'), alt: 'Katarina di Maladel', block: 5, class: 'width'},
      {id: 37, src: () => import('../assets/photos/Katarina_58.jpg'), alt: 'Katarina di Maladel', block: 5, class: 'width'},
      {id: 38, src: () => import('../assets/photos/Katarina_40.jpg'), alt: 'Katarina di Maladel', block: 5, class: 'width'},

      {id: 39, src: () => import('../assets/photos/Katarina_entertainment_18.jpg'), alt: 'Katarina di Maladel', block: 6, class: 'width'},
      {id: 40, src: () => import('../assets/photos/Katarina_entertainment_19.jpg'), alt: 'Katarina di Maladel', block: 6, class: 'width'},
      {id: 41, src: () => import('../assets/photos/Katarina_entertainment_20.jpg'), alt: 'Katarina di Maladel', block: 6, class: 'width'},
      {id: 42, src: () => import('../assets/photos/Katarina_entertainment_35.jpg'), alt: 'Katarina di Maladel', block: 6, class: 'width'},
      {id: 43, src: () => import('../assets/photos/Katarina_entertainment_35a.jpg'), alt: 'Katarina di Maladel', block: 6, class: 'width'},
      {id: 44, src: () => import('../assets/photos/Katarina_entertainment_35b.jpg'), alt: 'Katarina di Maladel', block: 6, class: 'width'},
      {id: 45, src: () => import('../assets/photos/Katarina_entertainment_36.jpg'), alt: 'Katarina di Maladel', block: 6, class: 'width'},
      {id: 46, src: () => import('../assets/photos/Katarina_entertainment_37.jpg'), alt: 'Katarina di Maladel', block: 6, class: 'width'},

      {id: 47, src: () => import('../assets/photos/Katarina_83.jpg'), alt: 'Katarina di Maladel', block: 6, class: 'width'},
      {id: 48, src: () => import('../assets/photos/Katarina_84.jpg'), alt: 'Katarina di Maladel', block: 6, class: 'width'},
      {id: 49, src: () => import('../assets/photos/Katarina_85.jpg'), alt: 'Katarina di Maladel', block: 6, class: 'width'},

      
      /* ALL FILTER */ 
      {id: 50, src: () => import('../assets/photos/Katarina_outside_1.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 51, src: () => import('../assets/photos/Katarina_outside_2.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 52, src: () => import('../assets/photos/Katarina_outside_3.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 53, src: () => import('../assets/photos/Katarina_outside_4.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 54, src: () => import('../assets/photos/Katarina_outside_5.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 55, src: () => import('../assets/photos/Katarina_outside_6.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 56, src: () => import('../assets/photos/Katarina_outside_7.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 57, src: () => import('../assets/photos/Katarina_outside_8.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 58, src: () => import('../assets/photos/Katarina_outside_9.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 59, src: () => import('../assets/photos/Katarina_outside_10.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 60, src: () => import('../assets/photos/Katarina_outside_11.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 61, src: () => import('../assets/photos/Katarina_outside_12.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 62, src: () => import('../assets/photos/Katarina_outside_13.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 63, src: () => import('../assets/photos/Katarina_outside_14.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 64, src: () => import('../assets/photos/Katarina_outside_15.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 65, src: () => import('../assets/photos/Katarina_outside_16.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 66, src: () => import('../assets/photos/Katarina_outside_17.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 67, src: () => import('../assets/photos/Katarina_outside_18.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 68, src: () => import('../assets/photos/Katarina_outside_19.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 69, src: () => import('../assets/photos/Katarina_21.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 70, src: () => import('../assets/photos/Katarina_22.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 71, src: () => import('../assets/photos/Katarina_23.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 72, src: () => import('../assets/photos/Katarina_24.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 73, src: () => import('../assets/photos/Katarina_25.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 74, src: () => import('../assets/photos/Katarina_74.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 75, src: () => import('../assets/photos/Katarina_75.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 76, src: () => import('../assets/photos/Katarina_20.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 77, src: () => import('../assets/photos/Katarina_78.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 78, src: () => import('../assets/photos/Katarina_44.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 79, src: () => import('../assets/photos/Katarina_45.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 80, src: () => import('../assets/photos/Katarina_46.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 81, src: () => import('../assets/photos/Katarina_49.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 82, src: () => import('../assets/photos/Katarina_50.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 83, src: () => import('../assets/photos/Katarina_55.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 84, src: () => import('../assets/photos/Katarina_56.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 85, src: () => import('../assets/photos/Katarina_57.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 86, src: () => import('../assets/photos/Katarina_58.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 87, src: () => import('../assets/photos/Katarina_40.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      /*{id: 84, src: () => import('../assets/photos/Katarina_81.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'}, //maknuti
      {id: 85, src: () => import('../assets/photos/Katarina_82.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'}, //maknuti */
      {id: 88, src: () => import('../assets/photos/Katarina_entertainment_18.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 89, src: () => import('../assets/photos/Katarina_entertainment_19.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 90, src: () => import('../assets/photos/Katarina_entertainment_20.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 91, src: () => import('../assets/photos/Katarina_entertainment_35.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 92, src: () => import('../assets/photos/Katarina_entertainment_35a.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 93, src: () => import('../assets/photos/Katarina_entertainment_35b.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 94, src: () => import('../assets/photos/Katarina_entertainment_36.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 95, src: () => import('../assets/photos/Katarina_entertainment_37.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 96, src: () => import('../assets/photos/Katarina_83.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 97, src: () => import('../assets/photos/Katarina_84.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
      {id: 98, src: () => import('../assets/photos/Katarina_85.jpg'), alt: 'Katarina di Maladel', block: 1, class: 'width'},
    ],
    galleryIndex: 0,
    galleryFilter: 0,
    // Booking
    calendarData: [],
    bookingData: {},
    currentYear: '',
    // Inquiry
    inquiryData: {},
    // Language
    lang: 'eng',
    eng: {
      key: 1,
      nav: ['Home', 'Accommodation', 'Services', 'Gallery', 'Lang', 'Contact Us'],
      home: {
        title: ['Sun,', 'Spa', 'and', 'Wine'],
        subTitle: '3 dimensions of perfect vacation',
        scroll: 'Scroll for more',
        acc: 'Accommodation',
        ft: 'Services',
        p1: 'A peaceful oasis of relaxation and intimacy is the place we have envisaged as the ideal setting for this story. Providing the perfect escape from busy daily routine and set in breathtaking scenery, Stancija Katarina di Maladel can also brag with its services so you can completely relax and enjoy while we take care of all your needs.',
        galleryCards: [
          {id: 1, alt: 'Katarina di Maladel', src: 'Katarina_home_04.jpg', room: 'Living Room'},
          {id: 2, alt: 'Katarina di Maladel', src: 'Katarina_home_05.jpg', room: 'Bathroom'},
          {id: 3, alt: 'Katarina di Maladel', src: 'Katarina_home_06.jpg', room: 'Kitchen'},
          {id: 4, alt: 'Katarina di Maladel', src: 'Katarina_home_07.jpg', room: 'Bedroom'},
          {id: 5, alt: 'Katarina di Maladel', src: 'Katarina_home_08.jpg', room: 'Entertainment'},
          {id: 6, alt: 'Katarina di Maladel', src: 'Katarina_home_09.jpg', room: 'Outside'}
        ],
        clickForMore: 'Click for more',
        discoverMore: 'Discover more',
        t1: 'Luxury and beauty without compromise.',
        checkAva: 'Check availability',
        t2: 'Even easier to find us',
        visitGal: 'VISIT GALLERY NOW'
      },
      acc: {
        title: ['Accommodation'],
        p1: 'Istria has always been known for good food, excellent wine and life hedonism. We have incorporated these three things into our story, a story we will, with your help, be telling for many years.',
        p2: 'Located close to the small town of Finida, Stancija Katarina di Maladel estate stretches over 2.5 hectares and will attract you with its charms even if you are just passing by. And if you turn off the main road, through a small field road through the woods, the first thing you see when you come to the estate is a massive metal court that introduces you to the peaceful story of this place. A well-kept path leads you through the vineyard, and the path is guided by traditional Dalmatian plants - lavender and rosemary, which, in addition to their color, win hearts with their scents. Your vacation has begun!',
        p3: 'And as you slowly drive past the villa and park in the parking lot enough for 4 cars, a small olive grove stretches behind you. Strategically positioned at the very top of a small hill, facing west, Stancija Katarina di Maladel is always bathed in the sun as it quietly overlooks its vineyards and gardens. Sometimes your eye escapes far out to sea, especially if you find yourself on the terrace during sunset. Modern architecture is intertwined with materials traditionally used in this climate and blends perfectly with the surrounding nature.',
        p4: 'As you slowly enter through the door you notice that Stancija was done with an eye for detail and a sincere respect for the climate in which it is located. This allows Stancija Katarina di Maladel to create a superior atmosphere made of wood, stone and glass details, merging with each other. In the open space of the ground floor, there is a large dining table that connects kitchen with the large living room. As soon as you enter on the left there is a pantry and a guest toilet, and on the right there are stairs leading to the first floor.',
        p5: 'Facing the living room there is a long fireplace for a special atmosphere on chilly evenings. The kitchen is, of course, fully equipped and strategically located to allow you to cook carefree while supervising the little ones on the terrace.',
        p6: 'Almost the entire front is covered with glass doors through which you exit to the terrace which offers a divine view of the whole estate, small cascading gardens full of flowers, spices and palm trees, the surrounding vineyards and open sea on horizon, in the distance. The grandiose view is guaranteed whether you soak up the sun on the terrace, sip your drink in the pool, prepare a barbecue in the outdoor kitchen or enjoying dinner with family and friends.',
        p7: 'On the side of the living room there is a winter veranda, creating the perfect link with the lower floor which is entirely made for a complete relax and spa experience. In the basement you will find a massage room, exercise equipment, jacuzzi and two saunas - Turkish and Finnish.',
        p8: 'In the second part there is a wine shelf, a dining table and a fireplace, so that you can enjoy food and socialise without passing through the house wet. Small details such as a game console, a large TV, a wine rack and a poker and pool table can turn this part into a children\'s paradise, but also a men\'s paradise, while the ladies in the next room enjoy a massage or sauna.',
        p9: 'Upstairs are three rooms, and all three rooms have en-suite bathrooms. Next to the master room there is a small living room with additional couch-bed, exiting the balcony with a view worthy of admiration. The perfect place for a glass of wine after dinner in peace and quiet, while the rest of your loved ones still clean up the leftovers from the table.',
        p10: 'The garden, stretching over 2.5 hectares, in addition to vineyard, has a tennis and basketball court. And although the vineyard with 1000 seedlings is just at its beginning, and the vine is just starting to grow, you will have a unique opportunity to watch it grow and develop throughout the seasons and years. All this we did in order to, one day, have our own wine harvested in this very vineyard. If, on the other hand, you want an experience of the "old" vineyard, this is also possible, since there are a couple of them in full glory in the immediate vicinity of the estate. We are doing everything in order to provide you, our guests, with an unforgettable experience that will make you think about extending your vacation for at least a few days.',
        t1: 'Luxury and beauty without compromise.',
        link1: 'Check availability',
        link2: 'Go to gallery'
      },
      ft: {
        title: ['Services'],
        p1: 'A peaceful oasis of relaxation and intimacy is the place we have envisaged as the ideal setting for this story. Providing the perfect escape from busy daily routine and set in breathtaking scenery, Stancija Katarina di Maladel can also brag with its services so you can completely relax and enjoy while we take care of all your needs.',
        t2: 'Concierge',
        p2: 'For all of you who wants to completely relax and be carefree - we have a concierges at your service. They will be ready to take almost any wish, with notice usually prior to arrival, but if there is possibility you can make a request on the spot. Whether you want to go to the theatre, to the observatory, or get a professional masseur/masseuse to enjoy in our spa area, they will do everything to make it possible for you.',
        t3: 'Transfers',
        p3: 'By appointment, we will pick up our guests no matter how they\'re coming. Picking up from/to the airport, car escorting from the highway exit, or rent a sea dock and transport to the villa - it\'s all in our power! You just have to show up - the rest is ours to be worried about!',
        t4: 'Boat service',
        p4: 'From a small boat to the full sized yacht. With skipper or without. From Umag to Pula and back - the choice is only yours. But if you really want to dive in into Istrian beauty - this is the right way. A perfect way to escape everyday beaches crowded with people and go to surrounding islands and lovely secluded beaches.',
        t5: 'Vine tours',
        p5: 'Staying in Istria is an experience for itself, but to really know the region you need to taste it. That is why we prepared vine tours to boost your vacation with golden drops. Do a tour of traditional vineyards, take a peek into family wineries and taste only the best of local vines. Enjoy in stories, and local people who will always greet you with a broad smile!',
        t6: 'Cleaning service',
        p6: 'If you\'re staying one week or more, our cleaners are at your disposal to make your holiday completely carefree, whether you want them every day or as needed.',
        priorNotice: '*prior notice required',
        generalInfo: {
          title: 'GENERAL INFORMATION',
          p: ['Check-in from 16:00 hrs', 'Check-out by 10:00 hrs', 'All our rooms have terraces overlooking the sea or garden', 'Winery', 'Spa with jacuzzi', 'Turkish and Finnish sauna', 'All credit card accepted']
        },
        cancellation: {
          title: 'CANCELLATION POLICY',
          p: ['Paid amounts are not refundable', 'In case of COVID - 19 traveling restrictions refund is possible in voucher for future trips']
        },
        terms: {
          title: 'TERMS AND CONDITIONS',
          p: ['To preserve a term we require a bank transfer payment - 30% of the full price', 'Preserve reservation payments should be paid within 48 hours after confirming the reservations', 'The rest of the payment should be paid up until 30 days before arrival', 'Security deposit is 600€ - paid in cash upon arrival - refunded on the check out', 'After received payments it will be send a confirmation']
        }
      },
      gallery: {
        filters: ['All', 'Kitchen', 'Living Room', 'Bedrooms', 'Bathrooms', 'Entertainment', 'Outside'],
        nav: ['Home', 'Accommodation', 'Services', 'Gallery', 'Lang', 'Contact Us']
      },
      booking: {
        title: ['Contact', 'Us'],
        t1: 'It is easy to book your stay',
        t2: 'Or just send us an e-mail',
        info1: 'Provide us with your general information so we can contact you.',
        info2: 'If everything is right hit send button to reserve your dates.',
        btn: 'SEND'
      },
      privacyPolicy: {
        title: 'Privacy Policy',
        t1: 'Notice of submitting written complaints of service users',
        p1: 'In accordance with the provisions of Art. 6. St.1 item 3. Of the Law on Provision of Tourism Services NN no. 130/17 a consumer’s written complaint may be submitted via:',
        li1: 'email:',
        email: 'info@katarinadimaladel.com',
        p2: 'The received complaint of the service, user will be notiﬁed in writing without delay, the receipt of the complaint will be conﬁrmed, and the objection will be answered in writing within 15 days from the day of receipt of the complaint.'
      },
      footer: {
        link1: 'Contact Us',
        link2: 'Privacy Policy'
      }
    },
    tal: {
      key: 2,
      nav: ['Home', 'Alloggio', 'Servizi', 'Galleria', 'Lang', 'Contattaci'],
      home: {
        title: ['Sole, ', 'Spa ', 'e ', 'Vino '],
        subTitle: 'i tre ingredienti per una vacanza perfetta',
        scroll: 'Scorri per saperne di più',
        acc: 'Alloggio',
        ft: 'Servizi',
        p1: 'Un’oasi di pace e intimità – è così che ci immaginiamo il luogo ideale per una vacanza all’insegna del relax e del benessere. Stancija Katarina di Maladel, incastonata in un paesaggio mozzafiato, offre uno scenario rilassante per staccare la spina dalla frenetica vita quotidiana e in più vanta di una serie di servizi utili per chi desidera una vacanza con zero preoccupazioni. Rilassati e goditi le tue vacanze mentre noi ci prendiamo cura di tutto.',
        galleryCards: [
          {id: 1, alt: 'Katarina di Maladel', src: 'Katarina_home_04.jpg', room: 'Soggiorno'},
          {id: 2, alt: 'Katarina di Maladel', src: 'Katarina_home_05.jpg', room: 'Bagno'},
          {id: 3, alt: 'Katarina di Maladel', src: 'Katarina_home_06.jpg', room: 'Cucina'},
          {id: 4, alt: 'Katarina di Maladel', src: 'Katarina_home_07.jpg', room: 'Camera da letto'},
          {id: 5, alt: 'Katarina di Maladel', src: 'Katarina_home_08.jpg', room: 'Divertimento'},
          {id: 6, alt: 'Katarina di Maladel', src: 'Katarina_home_09.jpg', room: 'Al di fuori'}
        ],
        clickForMore: 'Fare clic per ulteriori',
        discoverMore: 'Scopri di più',
        t1: 'Lusso e bellezza senza compromessi.',
        checkAva: 'Verificare la disponibilità',
        t2: 'Ancora più facile trovarci',
        visitGal: 'VISITA LA GALLERIA ORA'
      },
      acc: {
        title: ['Accommodation'],
        p1: 'Istria è da sempre conosciuta per il buon cibo, i vini pregiati e l’edonismo. Abbiamo unito questi tre elementi per dar vita alla nostra storia che, con il tuo aiuto, verrà raccontata per molti anni a venire.',
        p2: 'Situata a pochi passi dal piccolo paese di Finida, Stancija Katarina di Maladel copre una superficie di 2.5 ettari e ti incanterà con il suo fascino anche se la intravedi solo di passaggio.\nSe invece scendi dalla strada principale e imbocchi la stradina sterrata nel bosco, la prima cosa che vedi quando giungi al podere è il grandioso cancello di metallo che introduce nell’ambiente pacifico di questo elegante podere. La villa si raggiunge attraverso un vigneto, percorrendo una strada di ghiaia fiancheggiata da tipiche piante mediterranee - lavanda e rosmarino – che con i loro colori e i loro profumi ti accendono i sensi. La tua vacanza è iniziata!',
        p3: 'Mentre passi lentamente davanti alla villa e ti fermi al parcheggio che può ospitare quattro autovetture, alle tue spalle si stende un piccolo uliveto.\nPosta strategicamente in cima a una piccola collina e orientata a ovest, la villa Katarina di Maladel è molto luminosa e sempre esposta al sole mentre tranquillamente domina i suoi vigneti e giardini. Ogni tanto lo sguardo si volge lontano fino all’orizzonte blu del mare aperto, specialmente se ti capita di trovarti sul terrazzo proprio quando il sole sta tramontando. I materiali tradizionali usati per la realizzazione di questo capolavoro dell’architettura contemporanea fanno sì che la casa si inserisca armoniosamente nella natura circostante.',
        p4: 'Quando varchi la soglia della Stancija Katarina di Maladel, noti immediatamente che la casa è arredata con un’attenzione particolare ai dettagli e con un profondo rispetto della cultura e del paesaggio circostante. Dalla porta d’ingresso si entra direttamente in un ambiente dove si respira un’aria di glamour grazie all’unione di legno, pietra e vetro che si intrecciano armoniosamente tra loro nella zona giorno aperta. Infatti, il piano terra è composto da un unico ambiente che unisce la cucina al salotto passando per la zona pranzo che con il suo grande tavolo fa da “perno” di congiunzione tra i diversi spazi. Appena entrati sulla sinistra ci sono un ripostiglio e un bagno di servizio, mentre alla destra si sviluppa una scala che porta al piano superiore.',
        p5: 'Orientato verso il salotto vi è un lungo caminetto che dona un’atmosfera calda e confortevole nelle fresche serate. La cucina è ovviamente completamente attrezzata e la sua posizione strategica ti permette di cucinare in piena tranquillità mentre tieni d’occhio i bambini che giocano sul terrazzo.',
        p6: 'La facciata della casa è illuminata da ampie vetrate affacciate sul terrazzo attiguo dal quale si gode una vista spettacolare sull’intero podere, i piccoli giardini terrazzati pieni di fiori, erbe aromatiche e palme, i vigneti circostanti e il mare aperto che si scorge in lontananza. Il panorama resta incantevole da qualunque angolo, sia che tu stia prendendo la tintarella sul terrazzo o ti stia rilassando nella piscina, sia che tu stia preparando una grigliata nella cucina all’aperto o gustando una cena in compagnia di familiari e amici.',
        p7: 'A lato del salotto si trova una veranda vetrata che funge da perfetto collegamento con il piano sottostante, ideato e realizzato in modo da permetterti di vivere una completa esperienza Spa. Scendendo al piano seminterrato, infatti, troverai una stanza per massaggi, attrezzature per palestra, una vasca idromassaggio e due saune – il bagno turco e la classica sauna finlandese.',
        p8: 'Sull’altro lato ci sono uno scaffale portabottiglie, un tavolo da pranzo e un camino, in modo che i nostri ospiti possano godere di un buon pasto in famiglia o tra amici senza dover attraversare bagnati la casa. Grazie ai piccoli dettagli come la console per videogiochi, un grande televisore, lo scaffale portabottiglie e un tavolo da poker, questo spazio può diventare una stanza giochi per i ragazzi oppure un rifugio per soli uomini, mentre le signore si fanno coccolare con un massaggio rilassante o si lasciano avvolgere dal calore della sauna nella stanza accanto.',
        p9: 'Al piano superiore cono presenti tre camere da letto ognuna con il proprio bagno privato. La camera principale vanta anche un piccolo salotto e un balcone panoramico – il luogo ideale per gustare un bicchiere di vino dopo cena in tutta tranquillità e santa pace, mentre i tuoi familiari sparecchiano la tavola.',
        p10: 'Oltre al vigneto, sui 2.5 ettari del podere vi sono anche un campo da tennis e uno da pallacanestro. Anche se il vigneto con 2000 piccole viti è stato piantato di recente e le viti hanno appena iniziato a crescere, avrai l’opportunità unica di vederlo crescere e svilupparsi nelle stagioni e negli anni, affinché un giorno possiamo offrirti un bicchiere di vino fatto con la nostra uva. Se invece vuoi vivere l’esperienza di un vigneto “vecchio”, anche questo tuo desiderio può essere esaudito perché nelle immediate vicinanze ve ne sono alcuni in pieno splendore.\nAbbiamo pensato e dato vita a questa grandiosa struttura per regalare ai nostri cari ospiti un’esperienza indimenticabile che magari, perché no, ti farà venire voglia di prolungare la vacanza per qualche giorno in più.',
        t1: 'Lusso e bellezza senza compromessi.',
        link1: 'Verificare la disponibilità',
        link2: 'Vai alla galleria'
      },
      ft: {
        title: ['Servizi'],
        p1: 'Un’oasi di pace e intimità – è così che ci immaginiamo il luogo ideale per una vacanza all’insegna del relax e del benessere. Stancija Katarina di Maladel, incastonata in un paesaggio mozzafiato, offre uno scenario rilassante per staccare la spina dalla frenetica vita quotidiana e in più vanta di una serie di servizi utili per chi desidera una vacanza con zero preoccupazioni. Rilassati e goditi le tue vacanze mentre noi ci prendiamo cura di tutto.',
        t2: 'Concierge', t3: 'Transfer',
        p2: 'Per coloro che sono alla ricerca di una vacanza spensierata in pieno relax, è possibile avere accesso a un servizio di concierge, a disposizione per quasi ogni esigenza. Di solito le prestazioni richieste sono da comunicare in fase di prenotazione, ma anche se ne fai richiesta sul posto, il concierge farà tutto il possibile per soddisfare i tuoi desideri, sia che tu voglia andare a teatro, visitare l’osservatorio o rilassarti con un massaggio professionale nella nostra area benessere.',
        p3: 'Su richiesta organizziamo servizi di transfer per tutti i nostri ospiti. Offriamo servizio transfer da/per aeroporto, scorta dall’uscita dell’autostrada, oppure la locazione di un posto barca e il trasporto fino alla villa – tutto è possibile! Devi solo venire ... a tutto il resto pensiamo noi.',
        t4: 'Charter',
        p4: 'Una piccola barca o uno yacht di lusso. Con o senza skipper. Da Umago a Pola e ritorno – la decisione sta a te, in base alle tue preferenze. Comunque, qualunque sia la tua scelta, se vuoi immergerti davvero nelle bellezze dell’Istria, allora questo è il modo giusto. Noleggiare una barca è il modo perfetto per sfuggire alla folla ed esplorare le isole circostanti e le spiagge appartate, una più carina dell’altra.',
        t5: 'Tour enologici',
        p5: 'Soggiornare in Istria è già un\'esperienza di per sé, ma per conoscere davvero la regione devi assaggiarla. Per questo motivo abbiamo organizzato dei tour di degustazione vini per dare alla tua vacanza quel fattore “wow”. Regalati un tour tra i vigneti tradizionali, visita le cantine delle tipiche aziende vinicole a conduzione familiare e assaggia i migliori vini locali. La gente locale accoglie tutti gli ospiti con un gran sorriso e sono sempre pronti a intrattenerli con storie e aneddoti sull’Istria!',
        t6: 'Servizio di pulizia',
        p6: 'Se trascorri da noi una o più settimane, il nostro personale di pulizia è a tua disposizione per rendere il tuo soggiorno più spensierato possibile, sia che tu voglia usufruire del servizio ogni giorno o al bisogno',
        priorNotice: '*è richiesta la prenotazione in anticipo',
        generalInfo: {
          title: 'INFORMAZIONE GENERALE',
          p: ['Check-in dalle ore 16:00', 'Check-out entro le ore 10:00', 'Tutte le nostre camere hanno terrazze vista mare o giardino', 'Azienda vinicola', 'Spa con vasca idromassaggio', 'Sauna turca e finlandese', 'Si accettano tutte le carte di credito']
        },
        cancellation: {
          title: 'POLITICA DI CANCELLAZIONE',
          p: ['Cancellazioni ricevute fino a 30 giorni prima dell\'arrivo - rimborso completo', 'Cancellazioni ricevute entro 30 giorni prima dell\'arrivo - nessun rimborso', 'In caso di COVID - 19 limitazioni di viaggio - se non è possibile spostare la prenotazione effettuiamo un rimborso completo', 'Si informa che si accettano cancellazioni solo in forma scritta']
        },
        terms: {
          title: 'TERMINI E CONDIZIONI',
          p: ['Per preservare un termine richiediamo un pagamento tramite bonifico bancario - 30% del prezzo intero', 'Conservare i pagamenti della prenotazione deve essere effettuato entro 48 ore dalla conferma della prenotazione', 'Il resto del pagamento deve essere pagato fino a 30 giorni prima dell\'arrivo', 'Il deposito cauzionale è di 600 € - pagato in contanti all\'arrivo - rimborsato al momento del check out', 'Dopo aver ricevuto i pagamenti verrà inviata una conferma']
        }
      },
      gallery: {
        filters: ['Tutti', 'Cucina', 'Soggiorno', 'Camere da letto', 'Bagni', 'Divertimento', 'Al di fuori'],
        nav: ['Home', 'Alloggio', 'Servizi', 'Galleria', 'Lang', 'Contattaci']
      },
      booking: {
        title: ['Contattaci', ''],
        t1: 'È facile prenotare il tuo soggiorno',
        t2: 'Oppure inviaci un\'e-mail',
        info1: 'Forniscici le tue informazioni generali in modo che possiamo contattarti.',
        info2: 'Se tutto va bene, premi il pulsante di invio per prenotare le date.',
        btn: 'SPEDIRE'
      },
      privacyPolicy: {
        title: 'Privacy Policy',
        t1: 'Notice of submitting written complaints of service users',
        p1: 'In accordance with the provisions of Art. 6. St.1 item 3. Of the Law on Provision of Tourism Services NN no. 130/17 a consumer’s written complaint may be submitted via:',
        li1: 'email:',
        email: 'info@katarinadimaladel.com',
        p2: 'The received complaint of the service, user will be notiﬁed in writing without delay, the receipt of the complaint will be conﬁrmed, and the objection will be answered in writing within 15 days from the day of receipt of the complaint.'
      },
      footer: {
        link1: 'Contattaci',
        link2: 'Politica sulla riservatezza'
      }
    },
    de: {
      key: 3,
      nav: ['Home', 'Unterkunft', 'Serviceleistungen', 'Galerie', 'Lang', 'Kontaktiere uns'],
      home: {
        title: ['Sonne, ', 'Spa ', 'und ', 'Wein '],
        subTitle: 'Die drei Zutaten für einen perfekten Urlaub',
        scroll: 'Scrollen Sie für mehr',
        acc: 'Unterkunft',
        ft: 'Serviceleistungen',
        p1: 'Eine ruhige Oase des Wohlbefindens und der Intimität – als genau so einen Ort stellen wir uns die ideale Kulisse für einen entspannten Urlaub vor. Inmitten einer traumhaften Landschaft gelegen, bietet Stancija Katarina di Maladel ein perfektes Ziel zur Alltagsflucht. Darüber hinaus kann sie mit vielfältigen Dienstleistungen prahlen, damit Sie sich vollständig entspannen und Ihren Urlaub sorglos genießen können, während wir uns um alle Ihre Bedürfnisse kümmern.',
        galleryCards: [
          {id: 1, alt: 'Katarina di Maladel', src: 'Katarina_home_04.jpg', room: 'Wohnzimmer'},
          {id: 2, alt: 'Katarina di Maladel', src: 'Katarina_home_05.jpg', room: 'Bad'},
          {id: 3, alt: 'Katarina di Maladel', src: 'Katarina_home_06.jpg', room: 'Küche'},
          {id: 4, alt: 'Katarina di Maladel', src: 'Katarina_home_07.jpg', room: 'Schlafzimmer'},
          {id: 5, alt: 'Katarina di Maladel', src: 'Katarina_home_08.jpg', room: 'Unterhaltung'},
          {id: 6, alt: 'Katarina di Maladel', src: 'Katarina_home_09.jpg', room: 'Draußen'}
        ],
        clickForMore: 'Klicken Sie für mehr',
        discoverMore: 'Entdecke mehr',
        t1: 'Luxus und Schönheit ohne Kompromisse.',
        checkAva: 'Verfügbarkeit prüfen',
        t2: 'Noch einfacher, uns zu finden',
        visitGal: 'JETZT GALERIE BESUCHEN'
      },
      acc: {
        title: ['Unterkunft'],
        p1: 'Istrien ist schon immer für gutes Essen, Spitzenweine und hedonistischen Lebensstil bekannt. Wir haben diese drei Aspekte in unserer Geschichte vereint und mit Ihrer Hilfe wird sie noch viele Jahre erzählt werden.',
        p2: 'In der Nähe des kleinen Ortes Finida gelegen, erstreckt sich das Anwesen Katarina di Maladel über 2.5 Hektar. Es wird Sie mit seinem unvergleichlichen Charme begeistern, auch wenn Sie nur vorbeifahren.\nWenn Sie über den schmalen Feldweg, der von der Hauptstraße abzweigt, durch den Wald fahren, kommen Sie zu einem imposanten Hoftor aus Metall, durch das Sie in das stille Ambiente dieses atemberaubenden Anwesens gelangen. Ein gekiester Weg führt durch einen Weingarten und zwischen typischen mediterranen Pflanzen – Lavendel und Rosmarin - hindurch, die mit ihren Farben und Gerüchen Ihre Sinne verzaubern. Ihr wohlverdienter Urlaub hat gerade begonnen!',
        p3: 'Während Sie an der Villa langsam vorbeifahren und das Auto auf einem Parkplatz mit vier Stellplätzen parken, liegt hinter Sich ein kleiner Olivenhain.\nStrategisch auf dem Gipfel eines kleinen Hügels gelegen und nach Westen ausgerichtet, d.h. immer der Sonne entgegen, bietet die Stancija Katarina di Maladel eine atemberaubende Aussicht auf die umliegenden Weinberge und Gärten. Manchmal wird Ihr Blick in die Ferne, auf das offene Meer irren, besonders wenn Sie sich während des Sonnenuntergangs auf der Terrasse befinden. Moderne Architektur ist mit lokalen traditionellen Materialien kombiniert und perfekt in die vorhandene Landschaft eingebunden.',
        p4: 'Wenn Sie die Villa betreten, wird Ihnen sofort auffallen, dass sie mit Liebe zum Detail und mit tiefem Respekt vor der Umgebung und der lokalen Tradition eingerichtet ist. Die virtuose Kombination von Holz, Stein und Glas schafft zwar ein großzügiges Wohnambiente. Zum offenen Raumkonzept im Erdgeschoss gehören ein großer Esstisch, die Küche und ein geräumiges Wohnzimmer. Links vom Eingang befinden sich ein Abstellraum und ein Gäste-WC, rechts vom Eingang eine Treppe zum Obergeschoss.',
        p5: 'Dem Wohnzimmer zugewandt ist ein langer Kamin, der an kühleren Abenden eine gemütliche Atmosphäre schafft. Die Küche ist natürlich voll ausgestattet und strategisch gelegen, um Ihnen sorgloses Kochen mit Blick auf die Kinder auf der Terrasse zu ermöglichen.',
        p6: 'Die großzügig verglaste Fassade bietet einen einfachen und komfortablen Zugang auf die Terrasse mit herrlichem Ausblick auf das ganze Anwesen, die kleinen terrassierten Gärten mit Blumen, Kräutern und Palmen, die umliegenden Weinberge und das Meer in der Ferne. Egal ob Sie sich auf der Terrasse sonnen, am Pool relaxen, in der Außenküche grillen oder ein Abendessen mit Ihrer Familie und Freunden genießen, ist die grandiose Aussicht allgegenwärtig.',
        p7: 'Auf der Seite des Wohnzimmers befindet sich ein Wintergarten, der als ideale Verbindung zum Untergeschoss dient. Das Untergeschoss ist als exklusiver Spa-Bereich konzipiert, so findet man im Souterrain einen Massageraum, Fitnessgeräte, Whirlpool und zwei Saunen – die traditionelle finnische Sauna und das türkische Dampfbad.',
        p8: 'Im anderen Teil des Untergeschosses sind ein Weinregal, ein Esstisch und ein Kamin, damit Sie die Mahlzeit mit Ihrer Familie oder Ihren Freunden genießen können, ohne nass durch das Haus laufen zu müssen. Dank den tollen Einzelheiten, wie die Spielkonsole, der große TV, das Weinregal und der Pokertisch, ist dieser Raum ideal als Kinderspielzimmer oder Man Cave geeignet, während die Damen im Nachbarraum eine Massage oder die Sauna genießen.',
        p9: 'Im ersten Stock gibt es drei Schlafzimmer. Jedes Zimmer verfügt über sein eigenes Badezimmer und das Elternschlafzimmer hat sogar ein kleines Wohnzimmer und einen Balkon mit zauberhaftem Blick. Der perfekte Ort für ein Glas Wein nach dem Abendessen in aller Ruhe und Frieden, während andere Mitglieder Ihrer Familie den Tisch abräumen.',
        p10: 'Neben dem Weinberg umfasst das 2.5 Hektar große Grundstück auch einen Tennis- und Basketballplatz. Obwohl der Weinberg mit 2.000 Setzlingen vor kurzem gepflanzt wurde und die Weinreben haben eben erst zu wachsen begonnen, haben Sie die einzigartige Möglichkeit, seinen Wuchs im Laufe der Jahre und später auch die jahreszeitliche Entwicklung der Trauben zu beobachten. Und eines Tages wird Ihnen unser eigener Wein von diesem Weinberg angeboten werden. Wenn Sie aber einen „alten“ Weinberg erleben möchten, ist das auch möglich, weil es in unmittelbarer Nähe einige in voller Pracht gibt.\nDas alles, um Euch, unseren lieben Gästen, ein unvergessliches Erlebnis zu bieten. Und wer weiß, vielleicht werden Sie Ihren Urlaub bei uns um ein paar Tage verlängern wollen…',
        t1: 'Luxus und Schönheit ohne Kompromisse.',
        link1: 'Verfügbarkeit prüfen',
        link2: 'Gehe zur Galerie'
      },
      ft: {
        title: ['Serviceleistungen'],
        p1: 'Eine ruhige Oase des Wohlbefindens und der Intimität – als genau so einen Ort stellen wir uns die ideale Kulisse für einen entspannten Urlaub vor. Inmitten einer traumhaften Landschaft gelegen, bietet Stancija Katarina di Maladel ein perfektes Ziel zur Alltagsflucht. Darüber hinaus kann sie mit vielfältigen Dienstleistungen prahlen, damit Sie sich vollständig entspannen und Ihren Urlaub sorglos genießen können, während wir uns um alle Ihre Bedürfnisse kümmern.',
        t2: 'Concierge-Leistungen',
        p2: 'Denjenigen, die sich vollständig entspannen und ihren Urlaub sorglos genießen möchten, stellen wir einen persönlichen Concierge zur Verfügung. Ihr Concierge wird sich gerne um alles kümmern und (fast) alle Ihre Wünsche erfüllen. Es wird empfohlen, uns Ihre besonderen Wünsche im Voraus mitzuteilen, aber Sie können uns sie auch vor Ort nennen und der Concierge wird sich bemühen, jeden Gästewunsch zu erfüllen, z.B. wenn Sie zum Theater oder zur Sternwarte gehen wollen oder eine professionelle Massage in unserem Spa-Bereich genießen möchten.',
        t3: 'Transfers',
        p3: 'Wie auch immer Sie anreisen, können wir Sie nach Absprache abholen. Flughafentransfers (Abhol- und Bringservice), Begleitung von der Autobahnausfahrt, oder Liegeplatzmiete und Transfer bis zur Villa – wir bieten das alles! Sie müssen nur auftauchen und wir kümmern uns um den Rest!',
        t4: 'Charter',
        p4: 'Ob Kleinboot oder Luxusyacht. Mit oder ohne Skipper. Von Umag nach Pula und zurück - Ihren Wünschen sind keine Grenzen gesetzt. Für diejenigen, die sich wirklich in die Schönheiten Istriens eintauchen wollen, ist eine Bootstour genau die richtige Wahl. Dies ist der beste Weg, um den überfüllten Stränden zu entkommen und die umliegenden Inseln und einsame, verträumte Buchten zu erkunden.',
        t5: 'Wein-Touren',
        p5: 'Ein Aufenthalt in Istrien ist bereits ein Erlebnis für sich, doch um die Region wirklich kennenzulernen, muss man sie verkosten. Darum haben wir einige Weintouren organisiert, um Ihren Urlaub mit guten Tropfen zu veredeln. Machen Sie eine Tour durch traditionelle Weinberge, werfen Sie einen Blick in Familienweingüter und probieren Sie die lokalen Spitzenweine. Lauschen Sie den Geschichten der Einheimischen, die ihre Gäste immer mit einem breiten Lächeln willkommen heißen!',
        t6: 'Reinigungsservice',
        p6: 'Wenn Sie bei uns eine Woche oder mehr verbringen, stellen wir Ihnen unsere Reinigungskraft gerne zur Verfügung - egal ob täglich oder nach Bedarf - damit Sie Ihren Urlaub sorglos genießen können.',
        priorNotice: '*vorherige Anmeldung erforderlich',
        generalInfo: {
          title: 'ALLGEMEINE INFORMATIONEN',
          p: ['Check-in ab 16:00 Uhr', 'Check-out bis 10:00 Uhr', 'Alle unsere Zimmer verfügen über Terrassen mit Blick auf das Meer oder den Garten', 'Weingut', 'Spa mit Whirlpool', 'Türkische und finnische Sauna', 'Alle Kreditkarten akzeptiert']
        },
        cancellation: {
          title: 'STORNIERUNGSBEDINGUNGEN',
          p: ['Stornierungen, die bis 30 Tage vor Anreise eingehen - volle Rückerstattung', 'Stornierungen innerhalb von 30 Tagen vor Anreise - keine Rückerstattung', 'Im Falle von COVID - 19 Reisebeschränkungen - wenn es keine Möglichkeit gibt, die Reservierung zu verschieben, leisten wir eine volle Rückerstattung', 'Bitte beachten Sie, dass wir Stornierungen nur schriftlich akzeptieren']
        },
        terms: {
          title: 'GESCHÄFTSBEDINGUNGEN',
          p: ['Um eine Laufzeit zu erhalten, benötigen wir eine Überweisung - 30% des vollen Preises', 'Reservierungszahlungen sollten innerhalb von 48 Stunden nach Bestätigung der Reservierungen bezahlt werden', 'Der Restbetrag muss bis 30 Tage vor Anreise bezahlt werden', 'Die Kaution beträgt 600 € - bei Ankunft in bar bezahlt - beim Check-out erstattet', 'Nach Zahlungseingang wird eine Bestätigung gesendet']
        }
      },
      gallery: {
        filters: ['Alle', 'Küche', 'Wohnzimmer', 'Schlafzimmer', 'Bad', 'Unterhaltung', 'Draußen'],
        nav: ['Home', 'Unterkunft', 'Serviceleistungen', 'Galerie', 'Lang', 'Kontaktiere uns']
      },
      booking: {
        title: ['Kontaktiere', 'uns'],
        t1: 'Es ist einfach, Ihren Aufenthalt zu buchen',
        t2: 'Oder senden Sie uns einfach eine E-Mail',
        info1: 'Geben Sie uns Ihre allgemeinen Informationen, damit wir Sie kontaktieren können.',
        info2: 'Wenn alles in Ordnung ist, klicken Sie auf Senden, um Ihre Daten zu reservieren.',
        btn: 'SENDEN'
      },
      privacyPolicy: {
        title: 'Privacy Policy',
        t1: 'Notice of submitting written complaints of service users',
        p1: 'In accordance with the provisions of Art. 6. St.1 item 3. Of the Law on Provision of Tourism Services NN no. 130/17 a consumer’s written complaint may be submitted via:',
        li1: 'email:',
        email: 'info@katarinadimaladel.com',
        p2: 'The received complaint of the service, user will be notiﬁed in writing without delay, the receipt of the complaint will be conﬁrmed, and the objection will be answered in writing within 15 days from the day of receipt of the complaint.'
      },
      footer: {
        link1: 'Kontaktiere uns',
        link2: 'Datenschutz-Bestimmungen'
      },
    }
  },
  mutations: {
    setNavState (state, payload) {
      state.showNav = payload
    },
    setTitleLoading (state, payload) {
      state.titleLoading = payload
    },
    setCalendarData (state, payload) {
      let saved = false;
      if (state.calendarData.length > 0) {
        state.calendarData.forEach(function(item) {
          if (item.year === state.currentYear)  {
            item.dateList = payload.dateList;
            saved = true;
          }
        })
        if (!saved) state.calendarData.push(payload)
      } else {
        state.calendarData.push(payload)
      }
    },
    setBookingData (state, payload) {
      state.bookingData = payload
    },
    setCurrentYear (state, payload) {
      state.currentYear = payload
    },
    setInquiryData (state, payload) {
      state.inquiryData = payload
    },
    setGalleryIndex (state, payload) {
      state.galleryIndex = payload;
    },
    setImageSource (state, payload) {
      state.gallery[state.galleryIndex].src = payload;
    },
    setGalleryFilterNumber (state, payload) {
      state.galleryFilter = payload;
    },
    toggleLang (state, payload) {
      state.lang = payload
    }
  },
  getters: {
    getWebData: state => {
      if (state.lang === 'eng') return state.eng
      else if (state.lang === 'de') return state.de
      else  return state.tal
    },
    getLang: state => {
      return state.lang
    },
    getNavState: state => {
      return state.showNav
    },
    getTitleLoadingState: state => {
      return state.titleLoading
    },
    getMonths: state => {
      return state.months
    },
    getCalendarData: state => {
      return state.calendarData.filter(item => item.year === state.currentYear)
    },
    getBookingData: state => {
      return state.bookingData
    },
    getInquiryData: state => {
      return state.inquiryData
    },
    getGalleryImage: state => {
      return state.gallery[state.galleryIndex]
    },
    getGalleryFilter: state => {
      return state.gallery.filter(g => g.block === state.galleryFilter)
    },
    getGalleryAll: state => {
      return state.gallery
    }
  },
  actions: {
    getIndexOfImage ({state}, img) {
      return state.gallery.findIndex(i => i.id === img.id);
    }
  },
  modules: {
  }
})
