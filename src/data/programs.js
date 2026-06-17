export const programs = {
  strength: {
    name: "Strength Builder", emoji: "🏋️",
    desc: "Build lean muscle and raw power with 4 weeks of progressive overload training.",
    bgClass: "pb1",
    tag: "4 Weeks · All Levels",
    meta: ["⏱ 45–60 min/session", "📅 5 days/week", "🏋️ Equipment required", "⚡ All levels"],
    includes: ["4-Week Full Program (20 sessions)", "Progressive Overload System", "Rest & Recovery Guide", "Nutrition Plan", "Exercise Video Library"],
    weeks: {
      1: { label: "Foundation", days: [
        { name: "Chest & Triceps", focus: "Push Day", tags: ["Strength","Upper"], exercises: [
          { n: "Bench Press", detail: "4 sets × 8 reps · 90s rest", badge: "Primary" },
          { n: "Incline Dumbbell Press", detail: "3 sets × 10 reps · 60s rest", badge: "Secondary" },
          { n: "Cable Flyes", detail: "3 sets × 12 reps · 60s rest", badge: "Isolation" },
          { n: "Tricep Pushdowns", detail: "3 sets × 12 reps · 45s rest", badge: "Isolation" },
          { n: "Overhead Tricep Extension", detail: "3 sets × 10 reps · 45s rest", badge: "Finisher" }
        ]},
        { name: "Back & Biceps", focus: "Pull Day", tags: ["Strength","Upper"], exercises: [
          { n: "Deadlift", detail: "4 sets × 6 reps · 2min rest", badge: "Primary" },
          { n: "Bent-Over Barbell Row", detail: "4 sets × 8 reps · 90s rest", badge: "Primary" },
          { n: "Pull-Ups", detail: "3 sets × max reps · 90s rest", badge: "Compound" },
          { n: "Dumbbell Bicep Curls", detail: "3 sets × 12 reps · 45s rest", badge: "Isolation" },
          { n: "Hammer Curls", detail: "3 sets × 10 reps · 45s rest", badge: "Finisher" }
        ]},
        { name: "Legs & Glutes", focus: "Leg Day", tags: ["Strength","Lower"], exercises: [
          { n: "Barbell Squat", detail: "4 sets × 8 reps · 2min rest", badge: "Primary" },
          { n: "Romanian Deadlift", detail: "3 sets × 10 reps · 90s rest", badge: "Secondary" },
          { n: "Leg Press", detail: "3 sets × 12 reps · 90s rest", badge: "Compound" },
          { n: "Walking Lunges", detail: "3 sets × 20 steps · 60s rest", badge: "Functional" },
          { n: "Calf Raises", detail: "4 sets × 15 reps · 45s rest", badge: "Isolation" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Shoulders & Core", focus: "Press Day", tags: ["Strength","Upper"], exercises: [
          { n: "Overhead Press", detail: "4 sets × 8 reps · 90s rest", badge: "Primary" },
          { n: "Lateral Raises", detail: "3 sets × 15 reps · 45s rest", badge: "Isolation" },
          { n: "Front Raises", detail: "3 sets × 12 reps · 45s rest", badge: "Isolation" },
          { n: "Plank", detail: "3 sets × 60s · 45s rest", badge: "Core" },
          { n: "Cable Woodchop", detail: "3 sets × 12 reps each · 45s rest", badge: "Core" }
        ]},
        { name: "Full Body Circuit", focus: "Circuit Day", tags: ["Strength","Full Body"], exercises: [
          { n: "Barbell Clean & Press", detail: "4 sets × 6 reps · 2min rest", badge: "Power" },
          { n: "Dumbbell Renegade Rows", detail: "3 sets × 8 reps · 90s rest", badge: "Compound" },
          { n: "Goblet Squat", detail: "3 sets × 12 reps · 60s rest", badge: "Lower" },
          { n: "Push-Up Variations", detail: "3 sets × 15 reps · 45s rest", badge: "Upper" },
          { n: "Ab Wheel Rollout", detail: "3 sets × 10 reps · 45s rest", badge: "Core" }
        ]},
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      2: { label: "Build", days: [
        { name: "Chest & Triceps", focus: "Push Day — Increased Load", tags: ["Strength","Upper"], exercises: [
          { n: "Bench Press", detail: "4 sets × 6 reps · 2min rest · +5kg", badge: "Primary" },
          { n: "Incline Dumbbell Press", detail: "4 sets × 8 reps · 90s rest · +2kg", badge: "Secondary" },
          { n: "Dips", detail: "3 sets × 10 reps · 60s rest", badge: "Compound" },
          { n: "Close-Grip Bench Press", detail: "3 sets × 10 reps · 60s rest", badge: "Tricep" },
          { n: "Skull Crushers", detail: "3 sets × 12 reps · 45s rest", badge: "Finisher" }
        ]},
        { name: "Back & Biceps", focus: "Pull Day — Increased Load", tags: ["Strength","Upper"], exercises: [
          { n: "Deadlift", detail: "5 sets × 5 reps · 2min rest · +5kg", badge: "Primary" },
          { n: "Weighted Pull-Ups", detail: "4 sets × 6 reps · 90s rest", badge: "Compound" },
          { n: "Seated Cable Row", detail: "4 sets × 10 reps · 60s rest", badge: "Secondary" },
          { n: "EZ-Bar Curl", detail: "3 sets × 10 reps · 45s rest", badge: "Isolation" },
          { n: "Concentration Curls", detail: "3 sets × 12 reps · 45s rest", badge: "Finisher" }
        ]},
        { name: "Legs & Glutes", focus: "Leg Day — Increased Load", tags: ["Strength","Lower"], exercises: [
          { n: "Barbell Squat", detail: "5 sets × 5 reps · 2min rest · +5kg", badge: "Primary" },
          { n: "Leg Press", detail: "4 sets × 10 reps · 90s rest · +10kg", badge: "Compound" },
          { n: "Bulgarian Split Squat", detail: "3 sets × 8 reps each · 90s rest", badge: "Unilateral" },
          { n: "Hamstring Curl", detail: "3 sets × 12 reps · 60s rest", badge: "Isolation" },
          { n: "Standing Calf Raises", detail: "4 sets × 20 reps · 45s rest", badge: "Isolation" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Shoulders & Core", focus: "Press Day — Increased Load", tags: ["Strength","Upper"], exercises: [
          { n: "Overhead Press", detail: "4 sets × 6 reps · 2min rest · +2.5kg", badge: "Primary" },
          { n: "Arnold Press", detail: "3 sets × 10 reps · 90s rest", badge: "Secondary" },
          { n: "Upright Rows", detail: "3 sets × 12 reps · 60s rest", badge: "Compound" },
          { n: "Dragon Flag", detail: "3 sets × 8 reps · 60s rest", badge: "Core" },
          { n: "Russian Twists", detail: "3 sets × 20 reps · 45s rest", badge: "Core" }
        ]},
        { name: "Power Day", focus: "Explosive Training", tags: ["Power","Full Body"], exercises: [
          { n: "Power Clean", detail: "5 sets × 3 reps · 2min rest", badge: "Power" },
          { n: "Jump Squat", detail: "3 sets × 8 reps · 90s rest", badge: "Explosive" },
          { n: "Medicine Ball Slam", detail: "3 sets × 10 reps · 60s rest", badge: "Explosive" },
          { n: "Box Jump", detail: "3 sets × 6 reps · 60s rest", badge: "Plyometric" },
          { n: "Farmer's Walk", detail: "3 sets × 30m · 60s rest", badge: "Functional" }
        ]},
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      3: { label: "Push", days: [
        { name: "Chest & Triceps", focus: "Max Effort Push", tags: ["Strength","Upper"], exercises: [
          { n: "Bench Press", detail: "5 sets × 5 reps · 2min rest · +5kg more", badge: "Max Effort" },
          { n: "Weighted Dips", detail: "4 sets × 8 reps · 90s rest", badge: "Compound" },
          { n: "Incline Cable Flyes", detail: "3 sets × 15 reps · 60s rest", badge: "Isolation" },
          { n: "Tricep Dips", detail: "4 sets × 12 reps · 60s rest", badge: "Tricep" },
          { n: "Diamond Push-Ups", detail: "3 sets × failure · 45s rest", badge: "Finisher" }
        ]},
        { name: "Back & Biceps", focus: "Max Effort Pull", tags: ["Strength","Upper"], exercises: [
          { n: "Deadlift", detail: "5 sets × 3 reps · 3min rest · near max", badge: "Max Effort" },
          { n: "Barbell Row", detail: "5 sets × 5 reps · 2min rest", badge: "Compound" },
          { n: "T-Bar Row", detail: "4 sets × 8 reps · 90s rest", badge: "Secondary" },
          { n: "Preacher Curl", detail: "4 sets × 10 reps · 60s rest", badge: "Isolation" },
          { n: "Spider Curls", detail: "3 sets × 12 reps · 45s rest", badge: "Finisher" }
        ]},
        { name: "Legs & Glutes", focus: "Max Effort Legs", tags: ["Strength","Lower"], exercises: [
          { n: "Barbell Squat", detail: "6 sets × 3 reps · 3min rest · near max", badge: "Max Effort" },
          { n: "Front Squat", detail: "4 sets × 6 reps · 2min rest", badge: "Compound" },
          { n: "Stiff-Leg Deadlift", detail: "4 sets × 8 reps · 90s rest", badge: "Posterior" },
          { n: "Leg Extension", detail: "3 sets × 15 reps · 60s rest", badge: "Isolation" },
          { n: "Seated Calf Raises", detail: "5 sets × 15 reps · 45s rest", badge: "Isolation" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Shoulders & Core", focus: "Max Effort Shoulders", tags: ["Strength","Upper"], exercises: [
          { n: "Overhead Press", detail: "5 sets × 3 reps · 3min rest · near max", badge: "Max Effort" },
          { n: "Push Press", detail: "4 sets × 5 reps · 2min rest", badge: "Power" },
          { n: "Face Pulls", detail: "4 sets × 15 reps · 60s rest", badge: "Rear Delt" },
          { n: "Hanging Leg Raise", detail: "4 sets × 12 reps · 60s rest", badge: "Core" },
          { n: "Pallof Press", detail: "3 sets × 12 reps · 45s rest", badge: "Core" }
        ]},
        { name: "Athletic Conditioning", focus: "Speed & Power", tags: ["Conditioning","Full Body"], exercises: [
          { n: "Sprint Intervals", detail: "8 × 30s all-out · 90s walk rest", badge: "Cardio" },
          { n: "Broad Jump", detail: "4 sets × 5 reps · 90s rest", badge: "Plyometric" },
          { n: "Kettlebell Swings", detail: "4 sets × 20 reps · 60s rest", badge: "Power" },
          { n: "Burpees", detail: "3 sets × 10 reps · 60s rest", badge: "Conditioning" },
          { n: "Battle Ropes", detail: "4 sets × 30s · 60s rest", badge: "Finisher" }
        ]},
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      4: { label: "Peak", days: [
        { name: "1-Rep Max Test: Chest", focus: "Peak Testing Day", tags: ["Peak","Upper"], exercises: [
          { n: "Bench Press — 1RM Attempt", detail: "Warm up fully · 3 attempts", badge: "1RM Test" },
          { n: "Incline Press — 3RM", detail: "Find 3-rep max", badge: "Test" },
          { n: "Chest Pump Finisher", detail: "3 sets × 20 push-ups · 30s rest", badge: "Pump" }
        ]},
        { name: "1-Rep Max Test: Back", focus: "Peak Testing Day", tags: ["Peak","Upper"], exercises: [
          { n: "Deadlift — 1RM Attempt", detail: "Warm up fully · 3 attempts", badge: "1RM Test" },
          { n: "Pull-Ups — Max Reps", detail: "3 sets to failure", badge: "Test" },
          { n: "Row Finisher", detail: "3 sets × 15 cable rows · 30s rest", badge: "Pump" }
        ]},
        { name: "1-Rep Max Test: Legs", focus: "Peak Testing Day", tags: ["Peak","Lower"], exercises: [
          { n: "Squat — 1RM Attempt", detail: "Warm up fully · 3 attempts", badge: "1RM Test" },
          { n: "Leg Press — 10RM", detail: "Find 10-rep max weight", badge: "Test" },
          { n: "Leg Pump Finisher", detail: "3 sets × 20 lunges · 30s rest", badge: "Pump" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "1-Rep Max Test: Shoulders", focus: "Peak Testing Day", tags: ["Peak","Upper"], exercises: [
          { n: "Overhead Press — 1RM Attempt", detail: "Warm up fully · 3 attempts", badge: "1RM Test" },
          { n: "Push Press — 3RM", detail: "Find 3-rep max", badge: "Test" },
          { n: "Shoulder Pump Finisher", detail: "3 sets × 20 lateral raises · 30s rest", badge: "Pump" }
        ]},
        { name: "Celebration Workout", focus: "Victory Lap", tags: ["Celebrate","Full Body"], exercises: [
          { n: "Your Favourite Exercise", detail: "Do what you love most — you've earned it!", badge: "🎉 Victory" },
          { n: "Full Body Circuit", detail: "Light weight, high energy, pure enjoyment", badge: "Celebrate" },
          { n: "Progress Photos", detail: "Compare week 1 vs week 4. You'll be amazed.", badge: "Milestone" }
        ]},
        { name: "Full Rest & Celebrate", focus: "You Did It!", tags: ["Rest","Achievement"], rest: true }
      ]}
    },
    nutrition: [
      { icon: "🥩", title: "Protein First", text: "Aim for 1.6–2.2g of protein per kg of bodyweight daily. Prioritize chicken, fish, eggs, Greek yogurt, and legumes." },
      { icon: "🍚", title: "Carb Timing", text: "Eat most of your carbs around workouts. Complex carbs like oats, rice, and sweet potato fuel performance and recovery." },
      { icon: "💧", title: "Hydration", text: "Drink at least 3–4 litres of water daily. Add electrolytes on heavy training days to maintain performance." }
    ],
    tips: [
      { icon: "📈", title: "Progressive Overload", text: "Add 2.5–5kg every week when you can complete all reps with good form. This is the key to strength gains." },
      { icon: "😴", title: "Sleep is Training", text: "Muscle is built during sleep. Aim for 7–9 hours every night. Poor sleep kills strength gains." },
      { icon: "📝", title: "Track Everything", text: "Log your weights, sets, and reps every session. What gets measured gets improved." },
      { icon: "🔥", title: "Warm Up Properly", text: "Spend 10 minutes warming up with light cardio and mobility. Cold muscles get injured." }
    ]
  },

  cardio: {
    name: "Cardio Blast", emoji: "🏃",
    desc: "Torch calories and supercharge your endurance with 4 weeks of dynamic cardio training.",
    bgClass: "pb2",
    tag: "4 Weeks · All Levels",
    meta: ["⏱ 30–45 min/session", "📅 5 days/week", "🏃 No equipment needed", "⚡ All levels"],
    includes: ["4-Week Cardio Plan (20 sessions)", "Heart Rate Zone Guide", "Endurance Progression", "Calorie-Burning Nutrition Plan", "Recovery Stretching Routine"],
    weeks: {
      1: { label: "Foundation", days: [
        { name: "Endurance Run", focus: "Steady State", tags: ["Cardio","Endurance"], exercises: [
          { n: "Warm-Up Walk", detail: "5 min easy pace", badge: "Warm Up" },
          { n: "Steady State Run", detail: "20 min at 65% max HR", badge: "Main" },
          { n: "Cool Down Walk", detail: "5 min + stretching", badge: "Cool Down" }
        ]},
        { name: "Low-Impact Cardio", focus: "Active Recovery", tags: ["Cardio","Low Impact"], exercises: [
          { n: "Cycling or Swimming", detail: "30 min at easy pace", badge: "Main" },
          { n: "Full Body Stretch", detail: "10 min post session", badge: "Recovery" }
        ]},
        { name: "Interval Training", focus: "Speed Work", tags: ["Cardio","Intervals"], exercises: [
          { n: "Warm-Up Jog", detail: "5 min easy", badge: "Warm Up" },
          { n: "Run Intervals", detail: "8 × 1min fast, 1min walk", badge: "Main" },
          { n: "Cool Down Jog", detail: "5 min + stretch", badge: "Cool Down" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Hill Training", focus: "Incline Work", tags: ["Cardio","Strength"], exercises: [
          { n: "Warm-Up", detail: "5 min flat walk/jog", badge: "Warm Up" },
          { n: "Hill Repeats", detail: "6 × 2min uphill, walk down", badge: "Main" },
          { n: "Flat Cool Down", detail: "5 min + stretching", badge: "Cool Down" }
        ]},
        { name: "Long Slow Run", focus: "Distance", tags: ["Cardio","Endurance"], exercises: [
          { n: "Long Run", detail: "30 min at conversational pace", badge: "Main" },
          { n: "Stretch & Foam Roll", detail: "10 min full body", badge: "Recovery" }
        ]},
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      2: { label: "Build", days: [
        { name: "Tempo Run", focus: "Speed Endurance", tags: ["Cardio","Tempo"], exercises: [
          { n: "Warm-Up", detail: "5 min easy jog", badge: "Warm Up" },
          { n: "Tempo Run", detail: "20 min at 75–80% HR", badge: "Main" },
          { n: "Cool Down", detail: "5 min walk + stretch", badge: "Cool Down" }
        ]},
        { name: "Cross-Training", focus: "Low Impact Day", tags: ["Cardio","Cross Train"], exercises: [
          { n: "Cycling", detail: "35 min moderate intensity", badge: "Main" },
          { n: "Core Circuit", detail: "3 × 10 planks, sit-ups, leg raises", badge: "Bonus" }
        ]},
        { name: "Speed Intervals", focus: "Race Pace", tags: ["Cardio","Speed"], exercises: [
          { n: "Warm-Up", detail: "5 min jog", badge: "Warm Up" },
          { n: "Speed Intervals", detail: "10 × 45s fast, 75s walk", badge: "Main" },
          { n: "Cool Down", detail: "5 min + full stretch", badge: "Cool Down" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Stair Training", focus: "Power Cardio", tags: ["Cardio","Power"], exercises: [
          { n: "Warm-Up", detail: "5 min walk", badge: "Warm Up" },
          { n: "Stair Runs", detail: "8 × up and down × 3", badge: "Main" },
          { n: "Cool Down", detail: "5 min flat + stretch", badge: "Cool Down" }
        ]},
        { name: "Long Run", focus: "Distance +5min", tags: ["Cardio","Endurance"], exercises: [
          { n: "Long Run", detail: "35 min at easy pace", badge: "Main" },
          { n: "Recovery Stretch", detail: "10 min full body", badge: "Recovery" }
        ]},
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      3: { label: "Push", days: [
        { name: "Fartlek Run", focus: "Mixed Intensity", tags: ["Cardio","Speed"], exercises: [
          { n: "Warm-Up", detail: "5 min easy", badge: "Warm Up" },
          { n: "Fartlek Run", detail: "25 min mixed pace bursts", badge: "Main" },
          { n: "Cool Down", detail: "5 min + stretch", badge: "Cool Down" }
        ]},
        { name: "Swim or Bike", focus: "Active Recovery", tags: ["Cardio","Low Impact"], exercises: [
          { n: "Swimming", detail: "40 min easy laps", badge: "Main" },
          { n: "Stretch", detail: "10 min post session", badge: "Recovery" }
        ]},
        { name: "Track Intervals", focus: "Speed Work", tags: ["Cardio","Speed"], exercises: [
          { n: "Warm-Up", detail: "5 min easy jog", badge: "Warm Up" },
          { n: "400m Repeats", detail: "6 × 400m fast · 90s rest", badge: "Main" },
          { n: "Cool Down", detail: "5 min jog + stretch", badge: "Cool Down" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Hill Repeats", focus: "Strength Cardio", tags: ["Cardio","Hills"], exercises: [
          { n: "Warm-Up", detail: "5 min walk", badge: "Warm Up" },
          { n: "Hill Repeats", detail: "10 × 90s hard uphill", badge: "Main" },
          { n: "Cool Down", detail: "5 min + stretch", badge: "Cool Down" }
        ]},
        { name: "Long Run", focus: "Distance +10min", tags: ["Cardio","Endurance"], exercises: [
          { n: "Long Run", detail: "40 min at comfortable pace", badge: "Main" },
          { n: "Recovery Stretch", detail: "15 min full body", badge: "Recovery" }
        ]},
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      4: { label: "Peak", days: [
        { name: "5K Time Trial", focus: "Peak Test", tags: ["Peak","Speed"], exercises: [
          { n: "Warm-Up", detail: "10 min easy jog", badge: "Warm Up" },
          { n: "5K Time Trial", detail: "Run 5km as fast as possible", badge: "RACE PACE" },
          { n: "Cool Down", detail: "10 min walk + stretch", badge: "Cool Down" }
        ]},
        { name: "Active Recovery", focus: "Easy Day", tags: ["Recovery"], rest: true },
        { name: "Interval Finale", focus: "Best Effort", tags: ["Peak","Intervals"], exercises: [
          { n: "Warm-Up", detail: "5 min easy", badge: "Warm Up" },
          { n: "Max Effort Intervals", detail: "12 × 45s all-out, 60s walk", badge: "Peak" },
          { n: "Cool Down", detail: "5 min + stretch", badge: "Cool Down" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Celebration Long Run", focus: "Victory Run", tags: ["Celebrate"], exercises: [
          { n: "Long Run", detail: "45 min at your comfortable pace", badge: "🎉 Victory" },
          { n: "Celebration Stretch", detail: "15 min — you've earned it!", badge: "Milestone" }
        ]},
        { name: "Light Walk", focus: "Final Recovery", tags: ["Recovery"], exercises: [
          { n: "Easy Walk", detail: "20 min gentle walk", badge: "Recovery" },
          { n: "Reflect & Celebrate", detail: "You've completed 4 weeks!", badge: "🏆 Done!" }
        ]},
        { name: "Full Rest", focus: "You Did It!", tags: ["Rest"], rest: true }
      ]}
    },
    nutrition: [
      { icon: "🍌", title: "Carb Up Pre-Run", text: "Eat a banana or oats 1–2 hours before running. Simple carbs provide quick, clean energy for cardio sessions." },
      { icon: "🥤", title: "Stay Hydrated", text: "Drink 500ml of water 30 minutes before training. During runs over 30 min, sip every 15 minutes." },
      { icon: "🥚", title: "Post-Workout Protein", text: "Eat 20–30g of protein within 30 minutes after training to help muscle repair and reduce soreness." }
    ],
    tips: [
      { icon: "💓", title: "Know Your Zones", text: "Zone 2 (60–70% HR) builds aerobic base. Zone 4 (80–90%) builds speed. Use both strategically each week." },
      { icon: "👟", title: "Good Shoes Matter", text: "Running in worn-out shoes causes injuries. Replace them every 500–800km to protect your joints." },
      { icon: "🌙", title: "Recover Hard", text: "Rest days are not optional. Your cardiovascular system adapts during rest, not during the workout." },
      { icon: "📊", title: "Track Your Pace", text: "Use a free running app to track splits. Seeing your pace improve week by week is incredibly motivating." }
    ]
  },

  yoga: {
    name: "Yoga Flow", emoji: "🧘",
    desc: "Restore, rebalance and reconnect with 4 weeks of deep yoga and breathwork practice.",
    bgClass: "pb3",
    tag: "4 Weeks · All Levels",
    meta: ["⏱ 30–60 min/session", "📅 6 days/week", "🧘 Mat only", "⭐ All levels welcome"],
    includes: ["4-Week Yoga Journey (24 sessions)", "Breathwork & Meditation Guide", "Flexibility Progression Plan", "Mindfulness Journal Prompts", "Morning & Evening Flows"],
    weeks: {
      1: { label: "Foundation", days: [
        { name: "Sun Salutation Flow", focus: "Morning Practice", tags: ["Yoga","Flow"], exercises: [
          { n: "Mountain Pose", detail: "Hold 1 min · deep breathing", badge: "Grounding" },
          { n: "Sun Salutation A", detail: "5 full rounds · slow", badge: "Flow" },
          { n: "Warrior I & II", detail: "Hold each 5 breaths each side", badge: "Strength" },
          { n: "Child's Pose", detail: "Hold 2 min · release", badge: "Rest" }
        ]},
        { name: "Hip Opener Flow", focus: "Afternoon Practice", tags: ["Yoga","Hips"], exercises: [
          { n: "Low Lunge", detail: "Hold 8 breaths each side", badge: "Hip Flexor" },
          { n: "Pigeon Pose", detail: "Hold 2–3 min each side", badge: "Deep Stretch" },
          { n: "Happy Baby", detail: "Hold 2 min · rock gently", badge: "Release" },
          { n: "Savasana", detail: "5 min · full relaxation", badge: "Rest" }
        ]},
        { name: "Spine & Core", focus: "Core Practice", tags: ["Yoga","Core"], exercises: [
          { n: "Cat-Cow", detail: "10 rounds · sync with breath", badge: "Spine" },
          { n: "Boat Pose", detail: "3 × 30s holds", badge: "Core" },
          { n: "Plank to Down Dog", detail: "10 transitions slow", badge: "Flow" },
          { n: "Seated Forward Fold", detail: "Hold 3 min", badge: "Hamstrings" }
        ]},
        { name: "Yin Yoga", focus: "Deep Stretch", tags: ["Yoga","Yin"], exercises: [
          { n: "Butterfly Pose", detail: "Hold 5 min", badge: "Deep Yin" },
          { n: "Dragon Pose", detail: "Hold 3 min each side", badge: "Deep Yin" },
          { n: "Sleeping Swan", detail: "Hold 4 min each side", badge: "Deep Yin" },
          { n: "Savasana", detail: "10 min · full rest", badge: "Rest" }
        ]},
        { name: "Balance & Focus", focus: "Standing Practice", tags: ["Yoga","Balance"], exercises: [
          { n: "Tree Pose", detail: "Hold 1 min each side", badge: "Balance" },
          { n: "Warrior III", detail: "Hold 8 breaths each side", badge: "Balance" },
          { n: "Eagle Pose", detail: "Hold 8 breaths each side", badge: "Balance" },
          { n: "Standing Forward Fold", detail: "Hold 2 min", badge: "Release" }
        ]},
        { name: "Restorative Flow", focus: "Gentle Practice", tags: ["Yoga","Restore"], exercises: [
          { n: "Supported Fish Pose", detail: "Hold 5 min", badge: "Restorative" },
          { n: "Legs Up The Wall", detail: "Hold 10 min", badge: "Restorative" },
          { n: "Supine Twist", detail: "Hold 3 min each side", badge: "Spine" },
          { n: "Savasana", detail: "10 min guided rest", badge: "Rest" }
        ]},
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      2: { label: "Build", days: [
        { name: "Power Vinyasa", focus: "Flow Practice", tags: ["Yoga","Power"], exercises: [
          { n: "Sun Salutation B", detail: "8 full rounds · faster pace", badge: "Flow" },
          { n: "Chair Pose", detail: "Hold 10 breaths × 3", badge: "Strength" },
          { n: "Side Plank", detail: "Hold 30s each side × 3", badge: "Core" },
          { n: "Crow Pose Attempt", detail: "3 × 10s holds", badge: "Arm Balance" }
        ]},
        { name: "Backbend Focus", focus: "Heart Opening", tags: ["Yoga","Backbend"], exercises: [
          { n: "Sphinx Pose", detail: "Hold 3 min", badge: "Prep" },
          { n: "Cobra", detail: "Hold 8 breaths × 3", badge: "Backbend" },
          { n: "Wheel Pose", detail: "Hold 30s × 3 · or Bridge", badge: "Backbend" },
          { n: "Child's Pose", detail: "Hold 3 min · counter stretch", badge: "Counter" }
        ]},
        { name: "Twists & Detox", focus: "Twist Practice", tags: ["Yoga","Twists"], exercises: [
          { n: "Seated Spinal Twist", detail: "Hold 2 min each side", badge: "Twist" },
          { n: "Revolved Triangle", detail: "Hold 8 breaths each side", badge: "Twist" },
          { n: "Lunge Twist", detail: "Hold 8 breaths each side", badge: "Twist" },
          { n: "Supine Twist", detail: "Hold 3 min each side", badge: "Release" }
        ]},
        { name: "Yin Yoga", focus: "Deep Stretch", tags: ["Yoga","Yin"], exercises: [
          { n: "Frog Pose", detail: "Hold 5 min", badge: "Deep Yin" },
          { n: "Sphinx", detail: "Hold 5 min", badge: "Deep Yin" },
          { n: "Shoelace Pose", detail: "Hold 4 min each side", badge: "Deep Yin" },
          { n: "Savasana", detail: "10 min", badge: "Rest" }
        ]},
        { name: "Inversions Intro", focus: "Inversion Practice", tags: ["Yoga","Inversion"], exercises: [
          { n: "Dolphin Pose", detail: "Hold 1 min × 3", badge: "Prep" },
          { n: "Headstand at Wall", detail: "Hold 30s × 3 attempts", badge: "Inversion" },
          { n: "Shoulder Stand", detail: "Hold 2 min", badge: "Inversion" },
          { n: "Fish Pose", detail: "Hold 2 min counter", badge: "Counter" }
        ]},
        { name: "Meditation Flow", focus: "Mindfulness Practice", tags: ["Yoga","Meditation"], exercises: [
          { n: "Pranayama", detail: "Box breathing 4-4-4-4 · 10 min", badge: "Breathwork" },
          { n: "Body Scan", detail: "15 min guided", badge: "Meditation" },
          { n: "Loving Kindness", detail: "10 min practice", badge: "Meditation" }
        ]},
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      3: { label: "Push", days: [
        { name: "Advanced Flow", focus: "Strong Practice", tags: ["Yoga","Advanced"], exercises: [
          { n: "Sun Salutation A+B", detail: "10 rounds each", badge: "Flow" },
          { n: "Crow Pose", detail: "Hold 30s × 3", badge: "Arm Balance" },
          { n: "Handstand at Wall", detail: "5 attempts × 10s", badge: "Inversion" },
          { n: "Forearm Stand", detail: "5 attempts", badge: "Inversion" }
        ]},
        { name: "Deep Hip Opening", focus: "Release Practice", tags: ["Yoga","Hips"], exercises: [
          { n: "Double Pigeon", detail: "Hold 5 min each side", badge: "Deep Yin" },
          { n: "Lizard Pose", detail: "Hold 3 min each side", badge: "Hip Flexor" },
          { n: "Cow Face Pose", detail: "Hold 3 min each side", badge: "Hips" },
          { n: "Legs Wide Forward Fold", detail: "Hold 4 min", badge: "Inner Thigh" }
        ]},
        { name: "Core Power Flow", focus: "Core Strength", tags: ["Yoga","Core"], exercises: [
          { n: "Chaturanga Holds", detail: "Hold 10s × 5", badge: "Core" },
          { n: "Navasana Variations", detail: "5 variations × 30s", badge: "Core" },
          { n: "Plank Variations", detail: "5 types × 30s each", badge: "Core" },
          { n: "Savasana", detail: "10 min", badge: "Rest" }
        ]},
        { name: "Yin & Meditation", focus: "Deep Practice", tags: ["Yoga","Yin"], exercises: [
          { n: "Banana Pose", detail: "Hold 5 min each side", badge: "Deep Yin" },
          { n: "Melting Heart", detail: "Hold 5 min", badge: "Deep Yin" },
          { n: "Savasana with Meditation", detail: "20 min total", badge: "Deep Rest" }
        ]},
        { name: "Standing Series", focus: "Warrior Practice", tags: ["Yoga","Strength"], exercises: [
          { n: "Warrior I, II, III", detail: "10 breaths each · flowing", badge: "Warriors" },
          { n: "Half Moon Pose", detail: "Hold 8 breaths each side", badge: "Balance" },
          { n: "Reverse Warrior", detail: "Hold 8 breaths each side", badge: "Flow" },
          { n: "Triangle Pose", detail: "Hold 8 breaths each side", badge: "Side" }
        ]},
        { name: "Nidra & Rest", focus: "Yoga Nidra", tags: ["Yoga","Rest"], exercises: [
          { n: "Progressive Relaxation", detail: "20 min full body", badge: "Nidra" },
          { n: "Yoga Nidra", detail: "30 min deep rest practice", badge: "Deep Rest" }
        ]},
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      4: { label: "Peak", days: [
        { name: "Full Practice", focus: "Your Strongest Flow", tags: ["Peak","Flow"], exercises: [
          { n: "Complete Sequence", detail: "60 min · all poses combined", badge: "Peak" },
          { n: "Document Your Practice", detail: "Video yourself — see how far you've come", badge: "Milestone" }
        ]},
        { name: "Yin Final", focus: "Deep Release", tags: ["Peak","Yin"], exercises: [
          { n: "Full Body Yin", detail: "60 min · all major areas", badge: "Peak Yin" },
          { n: "Final Meditation", detail: "20 min", badge: "Meditation" }
        ]},
        { name: "Inversions Mastery", focus: "Inversion Day", tags: ["Peak","Inversions"], exercises: [
          { n: "Headstand", detail: "Hold 2 min", badge: "Mastery" },
          { n: "Shoulder Stand", detail: "Hold 3 min", badge: "Mastery" },
          { n: "Supported Handstand", detail: "Hold 10s × 5", badge: "Peak" }
        ]},
        { name: "Yin Rest", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Celebration Flow", focus: "Gratitude Practice", tags: ["Celebrate","Yoga"], exercises: [
          { n: "Free Flow", detail: "60 min · move how your body wants", badge: "🎉 Freedom" },
          { n: "Gratitude Meditation", detail: "15 min — reflect on your journey", badge: "Milestone" }
        ]},
        { name: "Final Meditation", focus: "Closing Practice", tags: ["Meditation"], exercises: [
          { n: "Extended Savasana", detail: "30 min · full relaxation", badge: "🏆 Complete" },
          { n: "Journaling", detail: "Write about your 4-week transformation", badge: "Reflection" }
        ]},
        { name: "Full Rest", focus: "You Did It!", tags: ["Rest"], rest: true }
      ]}
    },
    nutrition: [
      { icon: "🍵", title: "Eat Light Before Practice", text: "Practice on a relatively empty stomach. A light snack 2 hours before is fine. Avoid heavy meals within 3 hours." },
      { icon: "🥑", title: "Anti-Inflammatory Foods", text: "Include turmeric, ginger, leafy greens and omega-3 rich foods to support joint health and muscle recovery." },
      { icon: "💧", title: "Hydrate Gently", text: "Sip water throughout the day. Avoid drinking large amounts right before practice to maintain comfort in twists and inversions." }
    ],
    tips: [
      { icon: "🌬️", title: "Breath is Everything", text: "Every pose should be guided by your breath. If you can't breathe comfortably, you're pushing too hard — back off." },
      { icon: "⚠️", title: "Honour Your Limits", text: "Yoga is not a competition. Never force a pose. Over months, your flexibility will open naturally and safely." },
      { icon: "🌅", title: "Morning Practice", text: "Morning yoga sets your nervous system for the day. Even 15 minutes creates lasting calm and focus." },
      { icon: "📓", title: "Journal Your Journey", text: "Write 3 things you're grateful for after each session. Research shows this amplifies the mental benefits of yoga." }
    ]
  },

  hiit: {
    name: "HIIT Extreme", emoji: "⚡",
    desc: "High-intensity intervals that torch fat, spike metabolism, and build cardiovascular power.",
    bgClass: "pb4",
    tag: "4 Weeks · Intermediate+",
    meta: ["⏱ 20–35 min/session", "📅 4 days/week", "💪 No equipment needed", "🔥 Intermediate+"],
    includes: ["4-Week HIIT Program (16 sessions)", "Heart Rate Zone Training", "Fat Burning Nutrition Guide", "Active Recovery Plan", "Modification Options for Every Exercise"],
    weeks: {
      1: { label: "Foundation", days: [
        { name: "HIIT Circuit 1", focus: "Full Body Blast", tags: ["HIIT","Full Body"], exercises: [
          { n: "Jumping Jacks", detail: "45s on · 15s rest", badge: "Warm Up" },
          { n: "Burpees", detail: "40s on · 20s rest × 4", badge: "HIIT" },
          { n: "High Knees", detail: "40s on · 20s rest × 4", badge: "HIIT" },
          { n: "Push-Up to Plank", detail: "40s on · 20s rest × 4", badge: "HIIT" },
          { n: "Mountain Climbers", detail: "40s on · 20s rest × 4", badge: "Finisher" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "HIIT Circuit 2", focus: "Lower Body Focus", tags: ["HIIT","Lower"], exercises: [
          { n: "Jump Squats", detail: "40s on · 20s rest × 4", badge: "HIIT" },
          { n: "Alternating Lunges", detail: "40s on · 20s rest × 4", badge: "HIIT" },
          { n: "Glute Bridges", detail: "40s on · 20s rest × 4", badge: "HIIT" },
          { n: "Speed Skaters", detail: "40s on · 20s rest × 4", badge: "Finisher" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "HIIT Circuit 3", focus: "Upper Body & Core", tags: ["HIIT","Upper"], exercises: [
          { n: "Push-Ups", detail: "40s on · 20s rest × 4", badge: "HIIT" },
          { n: "Tricep Dips (chair)", detail: "40s on · 20s rest × 4", badge: "HIIT" },
          { n: "Plank Variations", detail: "40s on · 20s rest × 4", badge: "HIIT" },
          { n: "Bicycle Crunches", detail: "40s on · 20s rest × 4", badge: "Finisher" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      2: { label: "Build", days: [
        { name: "Tabata Full Body", focus: "Tabata Protocol", tags: ["HIIT","Tabata"], exercises: [
          { n: "Burpees Tabata", detail: "8 rounds: 20s on / 10s off", badge: "Tabata" },
          { n: "Jump Squats Tabata", detail: "8 rounds: 20s on / 10s off", badge: "Tabata" },
          { n: "Push-Up Tabata", detail: "8 rounds: 20s on / 10s off", badge: "Tabata" },
          { n: "Mountain Climbers Tabata", detail: "8 rounds: 20s on / 10s off", badge: "Tabata" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "AMRAP Circuit", focus: "As Many Rounds As Possible", tags: ["HIIT","AMRAP"], exercises: [
          { n: "10 Burpees", detail: "", badge: "AMRAP" },
          { n: "15 Jump Squats", detail: "", badge: "AMRAP" },
          { n: "20 Mountain Climbers", detail: "", badge: "AMRAP" },
          { n: "Do as many rounds as possible in 20 min", detail: "Rest only when absolutely needed", badge: "Goal" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Power HIIT", focus: "Explosive Training", tags: ["HIIT","Power"], exercises: [
          { n: "Box Jumps / Jump Squats", detail: "6 sets × 8 reps · 30s rest", badge: "Power" },
          { n: "Clap Push-Ups", detail: "4 sets × 6 reps · 45s rest", badge: "Power" },
          { n: "Tuck Jumps", detail: "4 sets × 10 reps · 30s rest", badge: "Plyometric" },
          { n: "Sprint in Place", detail: "6 × 20s all-out · 30s rest", badge: "Speed" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      3: { label: "Push", days: [
        { name: "Extreme Tabata", focus: "Extended Tabata", tags: ["HIIT","Extreme"], exercises: [
          { n: "Burpee Broad Jumps", detail: "8 rounds 20s/10s", badge: "Extreme" },
          { n: "180° Jump Squats", detail: "8 rounds 20s/10s", badge: "Extreme" },
          { n: "Push-Up to Side Plank", detail: "8 rounds 20s/10s", badge: "Extreme" },
          { n: "Tuck Jump Burpees", detail: "8 rounds 20s/10s", badge: "Finisher" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Long AMRAP", focus: "30 Min Challenge", tags: ["HIIT","AMRAP"], exercises: [
          { n: "12 Burpees", detail: "", badge: "AMRAP" },
          { n: "15 Jump Lunges", detail: "", badge: "AMRAP" },
          { n: "20 Push-Ups", detail: "", badge: "AMRAP" },
          { n: "25 Mountain Climbers", detail: "", badge: "AMRAP" },
          { n: "30 min AMRAP — track rounds", detail: "Push harder than Week 2", badge: "Goal" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Max Effort HIIT", focus: "All Out Session", tags: ["HIIT","Max"], exercises: [
          { n: "Sprint Intervals", detail: "10 × 30s all-out · 30s rest", badge: "Max" },
          { n: "Plyometric Push-Ups", detail: "5 × 8 reps · 45s rest", badge: "Max" },
          { n: "Squat Jump Combo", detail: "5 × 10 reps · 30s rest", badge: "Max" },
          { n: "Core Finisher", detail: "3 min Tabata abs", badge: "Finisher" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      4: { label: "Peak", days: [
        { name: "Peak HIIT Test", focus: "Max Output Day", tags: ["Peak","HIIT"], exercises: [
          { n: "Burpee Test", detail: "Max reps in 60s", badge: "1-Min Test" },
          { n: "Squat Jump Test", detail: "Max reps in 60s", badge: "1-Min Test" },
          { n: "Push-Up Test", detail: "Max reps in 60s", badge: "1-Min Test" },
          { n: "Compare to Week 1!", detail: "Track your improvement", badge: "🏆 Milestone" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Ultimate AMRAP", focus: "40 Min Final Challenge", tags: ["Peak","AMRAP"], exercises: [
          { n: "15 Burpees", detail: "", badge: "Ultimate" },
          { n: "20 Jump Squats", detail: "", badge: "Ultimate" },
          { n: "25 Mountain Climbers", detail: "", badge: "Ultimate" },
          { n: "15 Push-Ups", detail: "", badge: "Ultimate" },
          { n: "40 min AMRAP — your personal best", detail: "Go further than you ever have", badge: "Peak Goal" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Celebration HIIT", focus: "Victory Session", tags: ["Celebrate","HIIT"], exercises: [
          { n: "Favourite HIIT Moves", detail: "30 min · all the best exercises", badge: "🎉 Celebrate" },
          { n: "Final Sprint", detail: "1 min all-out — finish strong!", badge: "Victory" }
        ]},
        { name: "Full Rest", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Full Rest", focus: "You Did It!", tags: ["Rest"], rest: true }
      ]}
    },
    nutrition: [
      { icon: "⚡", title: "Pre-HIIT Fuel", text: "Eat 20–30g of fast carbs 30–60 min before HIIT. A banana with peanut butter is perfect. Avoid fat before training." },
      { icon: "🥩", title: "Post-HIIT Protein", text: "Your muscles are hungry after HIIT. Eat 30–40g of protein within 30 min — a shake or chicken and rice works perfectly." },
      { icon: "🔥", title: "Calorie Deficit Strategy", text: "HIIT already creates a big calorie burn. Eat in a 300–500 calorie deficit using mostly whole foods for maximum fat loss." }
    ],
    tips: [
      { icon: "🔥", title: "Intensity is Everything", text: "HIIT only works if you go hard. Rate of Perceived Exertion should be 8–9/10 during work intervals. Give it everything." },
      { icon: "⏰", title: "Rest Strictly", text: "Take exactly the prescribed rest. Resting too long lowers intensity. Resting too little means you can't go hard enough." },
      { icon: "🌊", title: "Master the Basics", text: "Perfect form on burpees, squats and push-ups before adding speed. Bad form at high speed causes injury." },
      { icon: "📈", title: "Count Your Reps", text: "In every session, count reps. In Week 4, compare to Week 1. Seeing your improvement is the best motivation." }
    ]
  },

  pilates: {
    name: "Pilates Core", emoji: "🤸",
    desc: "Sculpt and strengthen your core from the inside out with 4 weeks of precision pilates.",
    bgClass: "pb5",
    tag: "4 Weeks · All Levels",
    meta: ["⏱ 30–45 min/session", "📅 5 days/week", "🧘 Mat only", "⭐ All levels"],
    includes: ["4-Week Pilates Plan (20 sessions)", "Core Activation Guide", "Posture Improvement Program", "Breathing Technique Masterclass", "Beginner & Advanced Modifications"],
    weeks: {
      1: { label: "Foundation", days: [
        { name: "Pilates Fundamentals", focus: "Core Activation", tags: ["Pilates","Foundation"], exercises: [
          { n: "Imprinting & Neutral Spine", detail: "Hold awareness 5 min", badge: "Foundation" },
          { n: "The Hundred", detail: "3 × 30 pulses", badge: "Core" },
          { n: "Single Leg Stretch", detail: "3 × 10 reps each", badge: "Core" },
          { n: "Roll Up", detail: "3 × 8 reps", badge: "Core" },
          { n: "Spine Stretch Forward", detail: "3 × 8 reps", badge: "Stretch" }
        ]},
        { name: "Lower Body Pilates", focus: "Glutes & Legs", tags: ["Pilates","Lower"], exercises: [
          { n: "Clam Shell", detail: "3 × 15 reps each side", badge: "Glute" },
          { n: "Side-Lying Leg Lifts", detail: "3 × 12 reps each side", badge: "Hip" },
          { n: "Bridge", detail: "3 × 12 reps", badge: "Glute" },
          { n: "Single Leg Bridge", detail: "3 × 8 reps each side", badge: "Glute" }
        ]},
        { name: "Upper Body Pilates", focus: "Arms & Back", tags: ["Pilates","Upper"], exercises: [
          { n: "Swimming", detail: "3 × 30s", badge: "Back" },
          { n: "Dart", detail: "3 × 10 reps", badge: "Back" },
          { n: "Push-Up Pilates Style", detail: "3 × 8 reps", badge: "Upper" },
          { n: "Arm Circles", detail: "3 × 10 each direction", badge: "Shoulders" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Full Mat Sequence", focus: "Complete Session", tags: ["Pilates","Full"], exercises: [
          { n: "The Hundred", detail: "Full 100 pumps", badge: "Core" },
          { n: "Roll Up", detail: "3 × 10", badge: "Core" },
          { n: "Double Leg Stretch", detail: "3 × 10", badge: "Core" },
          { n: "Criss Cross", detail: "3 × 10 each side", badge: "Obliques" },
          { n: "Teaser Prep", detail: "3 × 8", badge: "Challenge" }
        ]},
        { name: "Stretch & Restore", focus: "Flexibility", tags: ["Pilates","Stretch"], exercises: [
          { n: "Spine Twist", detail: "Hold 30s each side × 3", badge: "Rotation" },
          { n: "Mermaid", detail: "Hold 30s each side × 3", badge: "Side Body" },
          { n: "Swan Prep", detail: "3 × 8 reps", badge: "Extension" },
          { n: "Child's Pose", detail: "Hold 3 min", badge: "Rest" }
        ]},
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      2: { label: "Build", days: [
        { name: "Advanced Core", focus: "Core Intensify", tags: ["Pilates","Core"], exercises: [
          { n: "The Hundred", detail: "Full 100 · legs lower", badge: "Core" },
          { n: "Rolling Like a Ball", detail: "3 × 10", badge: "Massage" },
          { n: "Open Leg Rocker", detail: "3 × 8", badge: "Balance" },
          { n: "Corkscrew", detail: "3 × 5 each direction", badge: "Control" },
          { n: "Teaser", detail: "3 × 8", badge: "Peak" }
        ]},
        { name: "Lateral Chain", focus: "Side Body", tags: ["Pilates","Side"], exercises: [
          { n: "Side Kick Series", detail: "Full series each side", badge: "Hip" },
          { n: "Side Bend", detail: "3 × 8 each side", badge: "Oblique" },
          { n: "Star Prep", detail: "3 × 8 each side", badge: "Challenge" }
        ]},
        { name: "Back Extension", focus: "Posterior Chain", tags: ["Pilates","Back"], exercises: [
          { n: "Swan", detail: "3 × 10", badge: "Extension" },
          { n: "Single Leg Kick", detail: "3 × 10 each", badge: "Glute" },
          { n: "Double Leg Kick", detail: "3 × 8", badge: "Back" },
          { n: "Swimming", detail: "3 × 45s", badge: "Endurance" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Standing Pilates", focus: "Upright Series", tags: ["Pilates","Standing"], exercises: [
          { n: "Standing Balance", detail: "3 × 1 min each leg", badge: "Balance" },
          { n: "Standing Leg Circles", detail: "3 × 10 each direction", badge: "Hip" },
          { n: "Standing Roll Down", detail: "5 times", badge: "Spine" },
          { n: "Squat with Alignment", detail: "3 × 12", badge: "Lower" }
        ]},
        { name: "Full Sequence", focus: "Long Practice", tags: ["Pilates","Full"], exercises: [
          { n: "Classical Mat Sequence", detail: "Full series, 45 min", badge: "Complete" },
          { n: "All exercises in sequence", detail: "Perform with control and breath", badge: "Practice" }
        ]},
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      3: { label: "Push", days: [
        { name: "Peak Core Challenge", focus: "Maximum Intensity", tags: ["Pilates","Peak"], exercises: [
          { n: "Jackknife", detail: "3 × 6", badge: "Advanced" },
          { n: "Control Balance", detail: "3 × 5 each side", badge: "Advanced" },
          { n: "Boomerang", detail: "3 × 6", badge: "Advanced" },
          { n: "Rocking", detail: "3 × 5", badge: "Advanced" }
        ]},
        { name: "Hip & Glute Focus", focus: "Lower Body Peak", tags: ["Pilates","Lower"], exercises: [
          { n: "Advanced Side Kick", detail: "Full series + variations", badge: "Advanced" },
          { n: "Bicycle", detail: "3 × 10 each direction", badge: "Hip" },
          { n: "Beats", detail: "3 × 30 beats", badge: "Inner Thigh" }
        ]},
        { name: "Spine & Twist", focus: "Rotation Focus", tags: ["Pilates","Rotation"], exercises: [
          { n: "Saw", detail: "3 × 10 each side", badge: "Rotation" },
          { n: "Spine Twist", detail: "3 × 10 each side", badge: "Rotation" },
          { n: "Criss Cross", detail: "3 × 15 each side", badge: "Oblique" },
          { n: "Corkscrew", detail: "3 × 8", badge: "Control" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Long Flow", focus: "60 Min Session", tags: ["Pilates","Full"], exercises: [
          { n: "Full Classical Pilates Mat", detail: "60 min complete sequence", badge: "Full Session" },
          { n: "Add advanced variations", detail: "Push beyond your comfort zone", badge: "Challenge" }
        ]},
        { name: "Restoration", focus: "Gentle Practice", tags: ["Pilates","Restore"], exercises: [
          { n: "Full Body Stretch", detail: "30 min restorative work", badge: "Recovery" },
          { n: "Breathing Exercises", detail: "10 min deep breath practice", badge: "Breathwork" }
        ]},
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      4: { label: "Peak", days: [
        { name: "Full Classical Mat", focus: "Peak Performance", tags: ["Peak","Pilates"], exercises: [
          { n: "Complete Classical Sequence", detail: "All 34 classical exercises", badge: "Peak" },
          { n: "Your best ever session", detail: "Apply everything you've learned", badge: "Mastery" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Core Power Test", focus: "Test Your Strength", tags: ["Peak","Test"], exercises: [
          { n: "Plank Hold", detail: "Max time test", badge: "Test" },
          { n: "Teaser Hold", detail: "Max time test", badge: "Test" },
          { n: "Compare to Week 1", detail: "Track your incredible progress", badge: "🏆 Milestone" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Celebration Session", focus: "Joy of Movement", tags: ["Celebrate"], exercises: [
          { n: "Free Flow Pilates", detail: "45 min — move how you love", badge: "🎉 Celebrate" },
          { n: "Gratitude Stretch", detail: "10 min reflection", badge: "Milestone" }
        ]},
        { name: "Final Session", focus: "Closing Practice", tags: ["Final"], exercises: [
          { n: "Restorative Pilates", detail: "30 min gentle closing session", badge: "🏆 Complete" },
          { n: "Reflect on Your Transformation", detail: "You have done something incredible", badge: "Achievement" }
        ]},
        { name: "Full Rest", focus: "You Did It!", tags: ["Rest"], rest: true }
      ]}
    },
    nutrition: [
      { icon: "🥦", title: "Eat Clean", text: "Pilates rewards a clean diet. Focus on vegetables, lean protein, whole grains and healthy fats. Avoid processed food." },
      { icon: "🍋", title: "Anti-Bloat Foods", text: "Avoid gassy foods before class — beans, cruciferous vegetables. Instead have rice, eggs, or a smoothie pre-session." },
      { icon: "🫖", title: "Magnesium", text: "Magnesium helps muscle recovery and flexibility. Eat dark leafy greens, nuts, seeds and dark chocolate to get enough." }
    ],
    tips: [
      { icon: "💨", title: "Breathe with Every Move", text: "Inhale to prepare, exhale to engage and move. Pilates breathing activates deep core muscles automatically." },
      { icon: "🎯", title: "Quality Over Quantity", text: "5 perfect reps beat 20 sloppy ones. In Pilates, precision is everything. Slow down and feel every movement." },
      { icon: "📐", title: "Fix Your Posture", text: "Pilates reshapes how you carry yourself. Notice your posture throughout the day — the benefits extend far beyond the mat." },
      { icon: "🔁", title: "Consistency Wins", text: "Pilates results are cumulative. 5 days a week for 4 weeks will transform your core strength, posture, and body shape." }
    ]
  },

  boxing: {
    name: "Boxing Fitness", emoji: "🥊",
    desc: "Get fighting fit with 4 weeks of pad work, bag combos, footwork, and conditioning drills.",
    bgClass: "pb6",
    tag: "4 Weeks · All Levels",
    meta: ["⏱ 40–50 min/session", "📅 4 days/week", "🥊 Gloves recommended", "⚡ All levels"],
    includes: ["4-Week Boxing Program (16 sessions)", "Technique Video Guide", "Combo Library (20+ combinations)", "Conditioning & Footwork Drills", "Fighter Nutrition Plan"],
    weeks: {
      1: { label: "Foundation", days: [
        { name: "Boxing Stance & Basics", focus: "Technique Day", tags: ["Boxing","Basics"], exercises: [
          { n: "Boxing Stance", detail: "Practice 5 min · mirror work", badge: "Technique" },
          { n: "Jab (1)", detail: "100 reps each arm · slow focus", badge: "Punch" },
          { n: "Cross (2)", detail: "100 reps · rotate hips", badge: "Punch" },
          { n: "Jab-Cross (1-2)", detail: "3 × 50 combos", badge: "Combo" },
          { n: "Shadow Box", detail: "3 × 2 min rounds", badge: "Shadow" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Hooks & Uppercuts", focus: "Technique Day 2", tags: ["Boxing","Hooks"], exercises: [
          { n: "Lead Hook (3)", detail: "100 reps · technique focus", badge: "Punch" },
          { n: "Rear Hook (4)", detail: "100 reps", badge: "Punch" },
          { n: "Lead Uppercut (5)", detail: "100 reps · drive up", badge: "Punch" },
          { n: "Rear Uppercut (6)", detail: "100 reps", badge: "Punch" },
          { n: "1-2-3-4 Combo", detail: "3 × 30 combos", badge: "Combo" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "First Sparring Drills", focus: "Combo Day", tags: ["Boxing","Combos"], exercises: [
          { n: "1-2 Combo", detail: "5 × 2 min rounds", badge: "Combo" },
          { n: "1-2-3 Combo", detail: "4 × 2 min rounds", badge: "Combo" },
          { n: "Footwork Drill", detail: "3 × 2 min moving patterns", badge: "Footwork" },
          { n: "Jump Rope", detail: "3 × 3 min", badge: "Conditioning" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      2: { label: "Build", days: [
        { name: "Combo Development", focus: "6-Punch Combos", tags: ["Boxing","Combos"], exercises: [
          { n: "1-2-3-2 Combo", detail: "5 × 2 min rounds", badge: "Combo" },
          { n: "1-2-3-4 Combo", detail: "5 × 2 min rounds", badge: "Combo" },
          { n: "Body Shot Combos", detail: "3 × 2 min · target body", badge: "Combo" },
          { n: "Shadow Box Free", detail: "3 × 3 min", badge: "Shadow" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Bag Work", focus: "Heavy Bag Session", tags: ["Boxing","Bag"], exercises: [
          { n: "Jabs on Bag", detail: "3 × 3 min · full power", badge: "Bag Work" },
          { n: "1-2 on Bag", detail: "3 × 3 min · power combos", badge: "Bag Work" },
          { n: "Body Hooks", detail: "3 × 2 min", badge: "Bag Work" },
          { n: "All-Out Combo", detail: "3 × 90s · everything you have", badge: "Power" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Conditioning Circuit", focus: "Fighter Conditioning", tags: ["Boxing","Conditioning"], exercises: [
          { n: "Jump Rope", detail: "5 × 3 min rounds · 1 min rest", badge: "Conditioning" },
          { n: "Shadow Box", detail: "5 × 3 min", badge: "Shadow" },
          { n: "Floor-to-Ceiling Ball", detail: "3 × 2 min · or shadow", badge: "Reflexes" },
          { n: "Core Circuit", detail: "3 × crunches, leg raises, planks", badge: "Core" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      3: { label: "Push", days: [
        { name: "Speed Rounds", focus: "Speed Day", tags: ["Boxing","Speed"], exercises: [
          { n: "Speed Jabs", detail: "6 × 2 min fast · max speed jabs", badge: "Speed" },
          { n: "Speed 1-2", detail: "6 × 2 min alternating", badge: "Speed" },
          { n: "Speed Bag Drill", detail: "5 × 2 min · or mirror speed work", badge: "Speed" },
          { n: "Pad Work Mimic", detail: "3 × 3 min partner or mirror", badge: "Simulation" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Power Rounds", focus: "Power Day", tags: ["Boxing","Power"], exercises: [
          { n: "Power 1-2", detail: "6 × 2 min · maximum power each punch", badge: "Power" },
          { n: "Power Hooks", detail: "4 × 2 min", badge: "Power" },
          { n: "Power Uppercuts", detail: "4 × 2 min", badge: "Power" },
          { n: "Knockout Combo", detail: "1-2-hook-uppercut × 3 min", badge: "Peak" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Sparring Simulation", focus: "Fight Simulation", tags: ["Boxing","Simulation"], exercises: [
          { n: "3-min Rounds", detail: "8 × 3 min full effort shadow", badge: "Simulation" },
          { n: "Between Rounds", detail: "30s rest · bounce and breathe", badge: "Fighter" },
          { n: "Simulate opponent", detail: "Move, defend, counter, attack", badge: "Drill" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Full Rest", focus: "Rest Day", tags: ["Rest"], rest: true }
      ]},
      4: { label: "Peak", days: [
        { name: "Championship Rounds", focus: "10 × 3 Min Rounds", tags: ["Peak","Boxing"], exercises: [
          { n: "10 Full Rounds", detail: "3 min each · 30s rest between", badge: "Championship" },
          { n: "Shadow Box", detail: "All combos, all movements", badge: "Peak" },
          { n: "Track your endurance vs Week 1", detail: "You'll be amazed by your stamina", badge: "🏆 Test" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Technical Mastery", focus: "Technique Day", tags: ["Peak","Technique"], exercises: [
          { n: "Master Every Punch", detail: "Slow, perfect, powerful", badge: "Mastery" },
          { n: "Defense Drills", detail: "Slip, roll, block practice", badge: "Defense" },
          { n: "Your Best Combo", detail: "Flow into your favourite combination", badge: "Peak" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Celebration Fight", focus: "Victory Rounds", tags: ["Celebrate","Boxing"], exercises: [
          { n: "Victory Shadow Box", detail: "12 × 3 min — full championship", badge: "🎉 Champion" },
          { n: "Final Combo", detail: "End with your best, hardest combo", badge: "Victory" }
        ]},
        { name: "Active Recovery", focus: "Rest Day", tags: ["Recovery"], rest: true },
        { name: "Full Rest", focus: "Champion!", tags: ["Rest"], rest: true }
      ]}
    },
    nutrition: [
      { icon: "🥩", title: "Protein for Recovery", text: "Boxing is physically demanding. Eat 35–45g of protein per meal — chicken, fish, eggs, or protein shakes post-session." },
      { icon: "🍚", title: "Carbs for Energy", text: "Complex carbs fuel long boxing sessions. Eat rice, oats, or pasta 2–3 hours before training for sustained energy." },
      { icon: "💊", title: "Key Supplements", text: "Creatine for power, magnesium for recovery, and vitamin C for immune support under intense training stress." }
    ],
    tips: [
      { icon: "✊", title: "Protect Your Hands", text: "Always wrap your hands before using a bag. Hand injuries are the most common boxing injury and very preventable." },
      { icon: "👀", title: "Eyes on the Target", text: "In shadow boxing, pick a spot on the wall and keep your eyes there. Good fighters never look away from their opponent." },
      { icon: "🦶", title: "Footwork First", text: "Great boxing starts with great footwork. Practice moving on the balls of your feet and staying light and mobile." },
      { icon: "💪", title: "Punch Through", text: "Don't punch TO the target — punch THROUGH it. This gives your strikes power and snap rather than just pushing." }
    ]
  }
}
