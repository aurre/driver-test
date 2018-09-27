'use strict';

const db = require('../server/db');
const { User, Question, Answer } = require('../server/db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123' }),
    User.create({ email: 'murphy@email.com', password: '123' }),
  ]);

  const questionData = [
    { question: 'When you come to a stop sign, you must stop your vehicle:' },
    {
      question:
        'When headlights are required, they should be dimmed at least 500 feet before meeting and 300 feet before overtaking another vehicle.',
    },
    {
      question:
        'When driving along the highway and the front right wheel of your vehicle runs off the pavement, you should:',
    },
    { question: 'Most rear end collisions are caused by:' },
    {
      question:
        'Which of the following is the single greatest factor in fatal motor vehicle accidents?',
    },
    {
      question:
        'When a right turn against a red signal light is allowed, the proper way to make the turn is to:',
    },
    {
      question:
        'When passing another vehicle, you should not cut back into the right lane until you can see the vehicle that you just passed in your rearview mirror.',
    },
    {
      question:
        'When a school bus is stopped on a two-lane highway and its red warning lights are flashing and its stop signal arm is extended, you must:',
    },
    {
      question:
        'A person may never drive a motor vehicle (even if borrowed or rented for a short period of time) unless the operator holds a valid drivers license which is properly classified for that kind and type of vehicle.',
    },
    {
      question:
        'When there are flashing signals at a railroad crossing and the train clears the crossing, how soon should you proceed ?',
    },
    {
      question:
        'When a two-lane pavement is marked with a single, solid yellow line on your side of the center line:',
    },
    {
      question:
        'Which of the following laws and safety rules apply to bicyclists?',
    },
    {
      question:
        'When making a left or right turn in a business or residential district, a continuous signal to turn must be given:',
    },
    {
      question:
        'When an authorized emergency vehicle which is using its siren and flashing lights approaches your vehicle, you should:',
    },
    {
      question:
        'If your vehicle starts to skid on water (hydroplane), you should:',
    },
    {
      question:
        'If you are convicted of passing a school bus that is receiving or discharging passengers, you may lose your drivers license for at least 30 days.',
    },
    {
      question:
        'The road surface of a bridge may be dangerous in winter because:',
    },
    {
      question: 'A flashing red traffic signal light at an intersection means:',
    },
    {
      question:
        'It is permissible for you to pass on the shoulder of the road.',
    },
    {
      question:
        'When required to stop at railroad crossings, vehicles must stop:',
    },
    {
      question:
        'In order to reinstate full driving privileges after a DRIVING UNDER THE INFLUENCE (DUI)revocation, a person must:',
    },
    {
      question:
        'It is unlawful for any person to leave the roadway and travel across private property to avoid an official control device.',
    },
    {
      question:
        'When driving on a slippery road and the rear end of your vehicle starts to skid, you should',
    },
    {
      question:
        'when a traffic light shows both a red light and a green arrow in the direction you wish to turn, you:',
    },
    {
      question:
        'The "2-Second Rule" works like this: when the vehicle ahead of you passes a fixed object like a tree, etc., if you begin counting, "one thousand one, one thousand two"; then if you reach the same tree before you have finished saying "one thousand two", you are following too closely.',
    },
    {
      question:
        'Illinois law requires children under age 6 to be secured by a restraint system or seat belt when traveling in a motor vehicle:',
    },
    {
      question:
        'A driver moving out of an alley, private road, or driveway within an urban area must:',
    },
    {
      question:
        'If you MUST drive during foggy weather, you should turn on the low-beam headlights and:',
    },
    {
      question:
        'When approaching a blind pedestrian carrying a white cane or accompanied by a guide dog:',
    },
    {
      question:
        'Motorcycles, though smaller and lighter in weight, have the same right-of-way privileges as other vehicles.Special observance should be given to motorcyclists when they approach an intersection, a railroad crossing, bridge or when bad weather occurs.',
    },
    {
      question:
        'When you are driving and one of your tires has a blowout, you should:',
    },
    {
      question:
        'The driver and front-seat passengers (age 6 and above) are required to wear seat safety belts while riding in a motor vehicle on Illinois roadways.Violators are subject to:',
    },
    {
      question:
        'You are waiting at an intersection and the traffic signal light changes to green, you may then go ahead:',
    },
    {
      question:
        'A person who REFUSES to submit to a chemical test, or tests, of his/her blood, breath or urine for the purpose of determining the level of alcohol and / or drug content:',
    },
    {
      question:
        'Your driving privileges will be revoked in the State of Illinois if you are convicted:',
    },
    {
      question:
        'When approaching a railroad grade crossing which does NOT have ANY warning system (such as electric flashing lights or gates) you should:',
    },
    {
      question:
        'Unless posted otherwise, it is permissible for drivers on a one-way street to turn left on a red light into another one - way street that moves traffic to the left after making a proper stop and yielding to traffic or pedestrians within the intersection.',
    },
    {
      question:
        'Motorcycles are entitled to use the full width of a traffic lane, the same as a vehicle. Therefore, when you are driving a vehicle and want to pass a motorcycle, you should:',
    },
    {
      question:
        'Your drivers license will be suspended if: after arrested for DRIVING UNDER THE INFLUENCE of alcohol and / or drugs(DUI).',
    },
  ];

  const answersData = [
    {
      answer: 'As close to the stop sign as possible.',
      correct: false,
      questionId: 1,
    },
    {
      answer:
        'At a place near the intersection providing you come to a complete stop.',
      correct: false,
      questionId: 1,
    },
    {
      answer:
        'At a marked stop line, before entering the crosswalk, or before entering the intersection if there is no crosswalk.',
      correct: true,
      questionId: 1,
    },
    { answer: 'true', correct: true, questionId: 2 },
    { answer: 'false', correct: false, questionId: 2 },
    {
      answer: 'Quickly swing back onto the pavement at your normal speed.',
      correct: false,
      questionId: 3,
    },
    {
      answer:
        'Grasp the steering wheel tightly and take your foot off the accelerator.',
      correct: true,
      questionId: 3,
    },
    {
      answer:
        'Apply the brakes immediately and swing back onto the pavement quickly.',
      correct: false,
      questionId: 3,
    },
    { answer: 'Dangerous road conditions.', correct: false, questionId: 4 },
    {
      answer: 'The vehicle in front stopping too fast.',
      correct: false,
      questionId: 4,
    },
    {
      answer: 'The vehicle in back following too closely.',
      correct: true,
      questionId: 4,
    },
    { answer: 'Alcohol.', correct: true, questionId: 6 },
    { answer: 'Mechanical problems.', correct: false, questionId: 6 },
    { answer: 'Bad weather conditions.', correct: false, questionId: 6 },
    { answer: 'Bad road conditions.', correct: false, questionId: 6 },
    {
      answer:
        'Stop, give right-of-way to any persons or vehicles within the intersection; then cautiously make your turn.',
      correct: true,
      questionId: 5,
    },
    {
      answer: 'Turn quickly to get out of the way of other vehicles.',
      correct: false,
      questionId: 5,
    },
    { answer: 'true', correct: true, questionId: 7 },
    { answer: 'false', correct: false, questionId: 7 },
    {
      answer: 'Slow down, sound your horn and pass the bus with caution.',
      correct: false,
      questionId: 8,
    },
    {
      answer: 'Stop your vehicle before reaching the bus.',
      correct: true,
      questionId: 8,
    },
    {
      answer:
        'Pass the bus on the left if there are no vehicles approaching from the opposite direction.',
      correct: false,
      questionId: 8,
    },
    { answer: 'true', correct: true, questionId: 9 },
    { answer: 'false', correct: false, questionId: 9 },
    {
      answer: 'Follow the vehicle ahead of you.',
      correct: false,
      questionId: 10,
    },
    {
      answer:
        'After you check to make sure another train is not approaching on another track.',
      correct: true,
      questionId: 10,
    },
    {
      answer: 'Just as soon as the train clears the crossing.',
      correct: false,
      questionId: 10,
    },
    {
      answer: 'Construction work is going on ahead, slow down.',
      correct: false,
      questionId: 11,
    },
    {
      answer: 'You must not cross the yellow line to pass another vehicle.',
      correct: true,
      questionId: 11,
    },
    {
      answer: 'You must slow down and proceed with caution.',
      correct: false,
      questionId: 11,
    },
    {
      answer:
        'Bicyclists should travel in the opposite direction of other vehicles.',
      correct: false,
      questionId: 12,
    },
    {
      answer:
        'The safest hours for operation are during times of poor visibility.',
      correct: false,
      questionId: 12,
    },
    {
      answer:
        'Bicyclists are entitled to the same right-of-way as other vehicles.',
      correct: true,
      questionId: 12,
    },
    {
      answer: 'Not less than 100 feet before turning.',
      correct: true,
      questionId: 13,
    },
    {
      answer: 'Only when vehicles are coming toward you.',
      correct: false,
      questionId: 13,
    },
    {
      answer: 'At least 50 feet from the intersection.',
      correct: false,
      questionId: 13,
    },
    { answer: 'Increase your speed.', correct: false, questionId: 14 },
    { answer: 'Continue at the same speed.', correct: false, questionId: 14 },
    {
      answer:
        'Pull over to the right hand edge of the highway and stop, if possible.',
      correct: true,
      questionId: 14,
    },
    {
      answer:
        'Take your foot off the accelerator and let your vehicle slow down.',
      correct: true,
      questionId: 15,
    },
    {
      answer: 'Turn your wheel slightly to the right and brake gently.',
      correct: false,
      questionId: 15,
    },
    {
      answer: 'Turn your ignition off and coast to a stop.',
      correct: false,
      questionId: 15,
    },
    { answer: 'true', correct: false, questionId: 16 },
    { answer: 'false', correct: true, questionId: 16 },
    { answer: 'The bridge surface is warmer.', correct: false, questionId: 17 },
    {
      answer:
        'There may be ice on bridges even when other pavements are clear.',
      correct: true,
      questionId: 17,
    },
    { answer: 'Neither of these.', correct: false, questionId: 17 },
    {
      answer: 'An emergency vehicle is approaching from your rear.',
      correct: false,
      questionId: 18,
    },
    {
      answer: 'You should be careful when going through the intersection.',
      correct: false,
      questionId: 18,
    },
    {
      answer: 'Exactly the same thing as a stop sign.',
      correct: true,
      questionId: 18,
    },
    { answer: 'true', correct: false, questionId: 19 },
    { answer: 'false', correct: true, questionId: 19 },
    {
      answer:
        'Within 25 feet, but not less than 15 feet from the nearest railroad crossing.',
      correct: false,
      questionId: 20,
    },
    {
      answer:
        'Within 50 feet, but not less than 15 feet from the nearest railroad crossing.',
      correct: true,
      questionId: 20,
    },
    {
      answer:
        'Within 75 feet, but not less than 25 feet from the nearest railroad crossing.',
      correct: false,
      questionId: 20,
    },
    {
      answer:
        'Within 100 feet, but not less than 50 feet from the nearest railroad crossing.',
      correct: false,
      questionId: 20,
    },
    {
      answer: 'Carry high-risk auto insurance for three years.',
      correct: false,
      questionId: 21,
    },
    {
      answer:
        'Be approved for reinstatement by a Secretary of State Hearing Officer and pay a $60 reinstatement fee.',
      correct: false,
      questionId: 21,
    },
    {
      answer:
        'Submit to a professional assessment of alcohol and/or drug use and attend a remedial or rehabilitation program.',
      correct: false,
      questionId: 21,
    },
    { answer: 'Wait a minimum of one year.', correct: false, questionId: 21 },
    { answer: 'All of the above.', correct: true, questionId: 21 },
    { answer: 'true', correct: true, questionId: 22 },
    { answer: 'false', correct: false, questionId: 22 },
    { answer: 'Apply the brakes quickly.', correct: false, questionId: 23 },
    {
      answer: 'Turn the front wheels in the direction of the skid.',
      correct: true,
      questionId: 23,
    },
    {
      answer:
        'Hold the wheel firmly and steer straight ahead, braking gradually.',
      correct: false,
      questionId: 23,
    },
    {
      answer:
        'Have the right-of-way over pedestrians in turning in the direction of the arrow.',
      correct: false,
      questionId: 24,
    },
    {
      answer: 'May proceed in the direction of the arrow with caution.',
      correct: true,
      questionId: 24,
    },
    {
      answer: 'Must stop and remain stopped until the red light has changed.',
      correct: false,
      questionId: 24,
    },
    { answer: 'true', correct: true, questionId: 25 },
    { answer: 'false', correct: false, questionId: 25 },
    { answer: 'In the front seat only.', correct: false, questionId: 26 },
    { answer: 'Anywhere in the vehicle.', correct: true, questionId: 26 },
    { answer: 'In the back seat only.', correct: false, questionId: 26 },
    { answer: 'Never, this is not a law.', correct: false, questionId: 26 },
    {
      answer: 'Sound your horn and exit quickly.',
      correct: false,
      questionId: 27,
    },
    {
      answer: 'Stop only if there are vehicles coming down the street.',
      correct: false,
      questionId: 27,
    },
    {
      answer:
        'Stop before reaching the sidewalk and yield to pedestrians and vehicles before proceeding.',
      correct: true,
      questionId: 27,
    },
    { answer: 'Flash your lights routinely.', correct: false, questionId: 28 },
    {
      answer:
        'Keep your foot on the brake pedal so your tail lights will be seen more easily.',
      correct: false,
      questionId: 28,
    },
    {
      answer:
        'Drive at a speed that will allow you to stop within your field of vision.',
      correct: true,
      questionId: 28,
    },
    {
      answer: 'You may pass if you slow down and sound the horn.',
      correct: false,
      questionId: 29,
    },
    {
      answer: 'You must yield the right-of-way.',
      correct: true,
      questionId: 29,
    },
    {
      answer:
        'You may pass if there are no vehicles approaching from the opposite direction.',
      correct: false,
      questionId: 29,
    },
    { answer: 'true', correct: true, questionId: 30 },
    { answer: 'false', correct: false, questionId: 30 },
    {
      answer: 'Quickly steer onto the right shoulder.',
      correct: false,
      questionId: 31,
    },
    {
      answer: 'Apply the brakes quickly to reduce speed.',
      correct: false,
      questionId: 31,
    },
    {
      answer:
        'Grip the steering wheel firmly, take your foot off the gas pedal, and let the vehicle slow down before you drive onto the shoulder.',
      correct: true,
      questionId: 31,
    },
    { answer: 'A $50 fine plus court costs.', correct: false, questionId: 32 },
    { answer: 'A $25 fine plus court costs.', correct: false, questionId: 32 },
    {
      answer: 'Suspension of their drivers license.',
      correct: false,
      questionId: 32,
    },
    { answer: 'None of the above.', correct: true, questionId: 32 },
    {
      answer: 'When you think it is safe to do so.',
      correct: false,
      questionId: 33,
    },
    {
      answer:
        'After first yielding the right-of-way to any persons or vehicles which are within the intersection.',
      correct: true,
      questionId: 33,
    },
    { answer: 'Immediately.', correct: false, questionId: 33 },
    {
      answer:
        'Will receive a drivers license suspension for 12 months for second or more refusals within a 5-year period.',
      correct: false,
      questionId: 34,
    },
    {
      answer:
        'May have this used as evidence against him/her in court if charged with DRIVING UNDER THE INFLUENCE of alcohol and / or drugs(DUI).',
      correct: false,
      questionId: 34,
    },
    {
      answer:
        'Will receive a drivers license suspension for six months on first offense.',
      correct: false,
      questionId: 34,
    },
    { answer: 'All of the above.', correct: true, questionId: 34 },
    { answer: 'Drag racing.', correct: false, questionId: 35 },
    {
      answer:
        'Driving or being in actual physical control of a vehicle while under the influence of alcohol or other drugs(including prescription drugs which may impair driving ability) and/or combinations, thereof.',
      correct: false,
      questionId: 35,
    },
    {
      answer:
        'Leaving the scene of an accident in which you are involved as a driver, if the accident results in death or personal injury.',
      correct: false,
      questionId: 35,
    },
    { answer: 'None of the above.', correct: false, questionId: 35 },
    { answer: 'All of the above.', correct: true, questionId: 35 },
    {
      answer: 'Continue at your normal speed.',
      correct: false,
      questionId: 36,
    },
    {
      answer:
        'Look, listen, slow down in case you have to stop, and proceed when safe to do so.',
      correct: true,
      questionId: 36,
    },
    {
      answer: 'Increase speed and cross tracks as quickly as possible.',
      correct: false,
      questionId: 36,
    },
    { answer: 'true', correct: true, questionId: 37 },
    { answer: 'false', correct: false, questionId: 37 },
    {
      answer: 'Follow the motorcycle without passing it.',
      correct: false,
      questionId: 38,
    },
    {
      answer:
        'Cautiously pass the motorcycle, sharing the same lane that it is using.',
      correct: false,
      questionId: 38,
    },
    {
      answer:
        'Not pass the motorcycle in the same lane that it is using, but change lanes and pass the way you would pass another vehicle.',
      correct: true,
      questionId: 38,
    },
    {
      answer:
        'You take a chemical test (breath, blood or urine) and register an amount equal to or over the legal level intoxication(.08%)',
      correct: true,
      questionId: 39,
    },
    {
      answer: 'You refuse to take a chemical test (breath, blood or urine).',
      correct: true,
      questionId: 39,
    },
    {
      answer: 'You take a chemical test and register .04%',
      correct: false,
      questionId: 39,
    },
  ];

  const questions = await Promise.all(
    questionData.map(data => Question.create(data))
  );

  const answers = await Promise.all(
    answersData.map(data => Answer.create(data))
  );

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${questions.length} questions`);
  console.log(`seeded ${answers.length} answers`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
