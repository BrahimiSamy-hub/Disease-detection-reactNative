import healthyCorn from '../assets/corn/healthy.jpg'
import graySpot from '../assets/corn/gray_leaf.jpg'
import commonRust from '../assets/corn/common_rust.jpg'
import blight from '../assets/corn/blight.jpg'

import healthyApple from '../assets/apple/healthy.jpg'
import scab from '../assets/apple/scab.jpg'
import rust from '../assets/apple/rust.jpg'

import healthyWheat from '../assets/wheat/healthy.jpg'
import septoria from '../assets/wheat/septoria.jpg'
import stripeRust from '../assets/wheat/stripe_rust.jpg'

import healthyCucumber from '../assets/cucumber/healthy.jpg'
import bacterial from '../assets/cucumber/bacterial.jpg'
import anthracnose from '../assets/cucumber/anthracnose.jpg'
import downyMildew from '../assets/cucumber/downy_mildew.jpg'
import gummy from '../assets/cucumber/gummy.jpg'

import healthyTomato from '../assets/tomato/healthy.jpg'
import bacterialTomato from '../assets/tomato/bacterial_spot.jpg'
import curl from '../assets/tomato/curl.jpg'
import mold from '../assets/tomato/mold.jpg'
import earlyBlight from '../assets/tomato/early_blight.jpg'
import mosaicVirus from '../assets/tomato/mosaic_virus.jpg'
import septoriaTomato from '../assets/tomato/septoria.jpg'
import spider from '../assets/tomato/spider.png'
import targetSpot from '../assets/tomato/target_spot.jpg'

export const diseases = [
  {
    name: 'Corn (Maize)',
    classes: [
      {
        name: 'Healthy',
        image: healthyCorn,
        description: 'This is a healthy corn plant.',
      },
      {
        name: 'Common Rust',
        image: graySpot,
        description: 'Red-brown pustules on leaves.',
      },
      {
        name: 'Blight',
        image: commonRust,
        description: 'Necrotic lesions on leaves and stalks.',
      },
      {
        name: 'Gray Leaf Spot',
        image: blight,
        description: 'Grayish rectangular lesions on leaves.',
      },
    ],
  },
  {
    name: 'Wheat',
    classes: [
      {
        name: 'Healthy',
        image: healthyWheat,
        description: 'This is a healthy wheat plant.',
      },
      {
        name: 'Septoria',
        image: septoria,
        description: 'Yellowing and spotting on leaves.',
      },
      {
        name: 'Stripe Rust',
        image: stripeRust,
        description: 'Yellow stripes on leaves and stems.',
      },
    ],
  },
  {
    name: 'Tomato',
    classes: [
      {
        name: 'Healthy',
        image: healthyTomato,
        description: 'This is a healthy tomato plant.',
      },
      {
        name: 'Mosaic Virus',
        image: mosaicVirus,
        description: 'Mottled leaves with dark green areas.',
      },
      {
        name: 'Target Spot',
        image: targetSpot,
        description: 'Small dark spots with yellow halos.',
      },
      {
        name: 'Bacterial Spot',
        image: bacterialTomato,
        description: 'Water-soaked lesions on leaves.',
      },
      {
        name: 'Yellow Leaf Curl Virus',
        image: curl,
        description: 'Upward curling and yellowing of leaves.',
      },
      {
        name: 'Leaf Mold',
        image: mold,
        description: 'Yellow spots with mold on undersides.',
      },
      {
        name: 'Early Blight',
        image: earlyBlight,
        description: 'Dark concentric spots on leaves.',
      },
      {
        name: 'Spider Mites Two-Spotted Spider Mite',
        image: spider,
        description: 'Stippling and webbing on leaves.',
      },
      {
        name: 'Septoria Leaf Spot',
        image: septoria,
        description: 'Small black spots with tan centers.',
      },
    ],
  },
  {
    name: 'Apple',
    classes: [
      {
        name: 'Healthy',
        image: healthyApple,
        description: 'This is a healthy apple tree.',
      },
      {
        name: 'Rust',
        image: rust,
        description: 'Orange spots on leaves and fruit.',
      },
      {
        name: 'Scab',
        image: scab,
        description: 'Dark, scabby lesions on leaves and fruit.',
      },
    ],
  },
  {
    name: 'Cucumber',
    classes: [
      {
        name: 'Healthy',
        image: healthyCucumber,
        description: 'This is a healthy cucumber plant.',
      },
      {
        name: 'Anthracnose',
        image: anthracnose,
        description: 'Dark sunken lesions on leaves and stems.',
      },
      {
        name: 'Bacterial Wilt',
        image: bacterial,
        description: 'Wilting and yellowing of leaves.',
      },
      {
        name: 'Downy Mildew',
        image: downyMildew,
        description: 'Yellow patches on upper leaf surfaces.',
      },
      {
        name: 'Gummy Stem Blight',
        image: gummy,
        description: 'Water-soaked lesions on stems and leaves.',
      },
    ],
  },
]

export const crops = [
  {
    id: 'corn',
    name: 'Corn',
    icon: require('../assets/modelChoice/corn.jpg'),
  },
  {
    id: 'cucumber',
    name: 'Cucumber',
    icon: require('../assets/modelChoice/cucumber.jpg'),
  },
  {
    id: 'tomato',
    name: 'Tomato',
    icon: require('../assets/modelChoice/tomato.jpg'),
  },
  {
    id: 'apple',
    name: 'Apple',
    icon: require('../assets/modelChoice/apple.jpg'),
  },
  {
    id: 'wheat',
    name: 'Wheat',
    icon: require('../assets/modelChoice/wheat.jpg'),
  },
]
