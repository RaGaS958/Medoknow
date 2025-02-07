
const PARA={
    brand:"Crocin, Calpol, Dolo 650, Paracetamol",
    uses:"Pain relief, fever reduction, mild to moderate pain (headaches, muscle pain, arthritis, toothaches), common cold symptoms.",
    composition:"Acetaminophen (500 mg or other variations)",
    precautions:"Overdose can cause liver damage,  Avoid if you have liver disease,Avoid alcohol consumption when using",                
    sideEffects:"Rarely, liver damage (especially with overdose),Allergic reactions (rash, swelling),Stomach pain."
         } ;    
const IBUP={
  brand:"Brufen, Ibugesic, Iproflam, Advil",
  uses:"Pain relief (headaches, menstrual pain, toothache, muscle pain, arthritis), reduces inflammation and fever.",
 composition:" Ibuprofen (200-400 mg)",
 precautions:"Can cause stomach upset or ulcers,Use cautiously in people with kidney disease, heart disease, or high blood pressure.",
 sideEffects:"Upset stomach, ulcers, gastrointestinal bleeding,Dizziness, headache,Kidney problems in prolonged use."
             } ;   
const AMOX={
  brand:"Amox, Mox, Augmentin (with clavulanic acid), Moxclav (with clavulanic acid)",
 uses:"Treats bacterial infections (ear infections, throat infections, urinary tract infections).",
 composition:"Amoxicillin (250 mg, 500 mg, 875 mg)",
 precautions:"Avoid if allergic to penicillin,Complete the full course to avoid antibiotic resistance.",
  sideEffects:"Diarrhea, nausea, vomiting,Allergic reactions (rash, difficulty breathing).Yeast infections."
       } ;  
const AZIT={
   brand:"Azithral, Zithromax, Azicip, Azee, Azithro",
   uses:" Bacterial infections (respiratory infections, ear infections, sexually transmitted infections).",
   composition:"Azithromycin (250 mg, 500 mg)",
  precautions:"Can cause QT interval prolongation (heart issue),Use with caution in people with liver or kidney issues.",
  sideEffects:"Diarrhea, nausea, vomiting,Abdominal pain,Risk of heart arrhythmias."
} ;    
const CETI={
     brand:"Zyrtec, Cetzine, Cetriz, Setiz, Zodak",
      uses:"Allergies (hay fever, skin hives, allergic rhinitis).",
      composition:"Cetirizine (10 mg)",
        precautions:"May cause drowsiness,Use with caution in liver or kidney disease.",
          sideEffects:"Drowsiness, dry mouth,Headache, dizziness,Fatigue"
} ;    
const LORA={
       brand:"Claritin, Loratex, Lorfast, Lora, Lorad",
       uses:"Allergies (hay fever, skin rashes, allergic rhinitis).",
        composition:"Loratadine (10 mg)",
         precautions:"Less sedating than cetirizine, but can still cause drowsiness,Use with caution in liver problems.",
         sideEffects:"sss"
          } ;    
const RANI={
     brand:"Zantac, Ranidom, Ranidec, Ranitic ",
      uses:"Reduces stomach acid (treats GERD, ulcers).",
       composition:" Ranitidine (75 mg, 150 mg)",
        precautions:"Previously associated with a potential cancer risk (nitrosamine contamination),Avoid in kidney disease.",
         sideEffects:"Dizziness, headaches,Diarrhea, constipation,Liver enzyme changes."
         } ;    
const OMEP={
      brand:" Losec, Omez, Ominext, Omez D",
      uses:" Treats acid reflux, GERD, ulcers, and Zollinger-Ellison syndrome.",
      composition:"Omeprazole (20 mg, 40 mg)",
      precautions:"Long-term use may lead to low magnesium levels,Can interfere with calcium absorption.",
      sideEffects:"Headache, nausea,Diarrhea or constipation,Risk of fractures with long-term use."
       } ;    
const METF={
        brand:"Glucophage, Glycomet, Metolar, Glimstar, Dianorm",
          uses:"Type 2 diabetes management.",
          composition:"Metformin (500 mg, 1000 mg)",
          precautions:"Monitor kidney function,Avoid in severe kidney or liver disease.",
           sideEffects:"Gastrointestinal issues (nausea, diarrhea),Lactic acidosis (rare but serious),Vitamin B12 deficiency."
           } ;    
const INSU={
          brand:"Humulin, Novorapid, Actrapid, Lantus, Insugen, Mixtard",
          uses:"Management of Type 1 and Type 2 diabetes.",
          composition:"Insulin (different forms: regular, rapid-acting, long-acting)",
           precautions:"Hypoglycemia (low blood sugar) is a risk,Needs adjustment based on blood sugar levels.",
           sideEffects:"Hypoglycemia, weight gain,Injection site reactions,Allergic reactions (rare)."
              } ;    
const ASPI={
         brand:"Disprin, Ecosprin, Aspro, Aspirin",
          uses:"Pain relief, anti-inflammatory, reduces the risk of heart attack and stroke.",
          composition:"Aspirin (81 mg, 325 mg, 500 mg)",
           precautions:"Not recommended for children with viral infections (due to Reye’s syndrome),Can cause gastrointestinal bleeding.",
            sideEffects:"Stomach irritation, ulcers,Bleeding disorders,Allergic reactions (rash, swelling)."
              } ;    
const LOSA={
         brand:"Losar, Lorista, Losacar, Zanidip",
          uses:"Treats high blood pressure and heart failure.",
           composition:"Losartan (50 mg, 100 mg)",
           precautions:"Use cautiously in kidney disease or pregnant women (teratogenic),Can interact with other blood pressure medications.",
           sideEffects:"Dizziness, low blood pressure,Elevated potassium levels,Fatigue."
           } ;    
const AMIO={
      brand:"Amlogard, Amvasc, Amlovas, Norvasc",
      uses:"Treats high blood pressure, angina.",
      composition:"Amlodipine (5 mg, 10 mg)",
      precautions:"Can cause swelling in the ankles,Avoid in severe liver disease.",
       sideEffects:"Swelling (edema),Dizziness, headache,Fatigue."
        } ;    
const ATOR={
    brand:"Lipitor, Ator, Storvas, Atorva, Rosuvas",
     uses:"Lowers cholesterol and triglycerides, reduces cardiovascular risk.",
      composition:" Atorvastatin (10 mg, 20 mg, 40 mg, 80 mg)",
        precautions:"Liver function should be monitored,Avoid in pregnancy.",
        sideEffects:"Muscle pain, liver enzyme changes,Digestive problems,Elevated blood sugar."
          } ;    
const FURO={
        brand:"Lasilactone, Frusemide, Furosemide, Lasic, Frulac",
          uses:"Diuretic, used to reduce fluid buildup (heart failure, kidney disease, edema).",
          composition:"Furosemide (20 mg, 40 mg, 80 mg)",
          precautions:"Can cause dehydration or electrolyte imbalances,Monitor kidney function.",
          sideEffects:"Dizziness, low blood pressure,Dehydration, electrolyte imbalances,Tinnitus (ear ringing)."
          } ;    
const LEVO={
         brand:"Thyronorm, Eltroxin, Euthyrox, Thyrox",
         uses:"Treats hypothyroidism (underactive thyroid).",
         composition:"Levothyroxine (25 mcg, 50 mcg, 100 mcg).",
          precautions:"Monitor thyroid levels regularly,Can interact with other medications (e.g., calcium supplements).",
         sideEffects:"Increased heart rate, anxiety,Weight loss, sweating,Difficulty sleeping."
         } ;    
const DIAZ={
         brand:"Valium, Calmpose, Relanium, Diapam, Anxovell",
          uses:"Anxiety, muscle spasms, seizures, alcohol withdrawal.",
          composition:"Diazepam (2 mg, 5 mg, 10 mg)",
           precautions:"Risk of dependence,Avoid alcohol use.",
            sideEffects:"Drowsiness, dizziness,Confusion, memory problems,Respiratory depression (at high doses)."
           } ;    
const SALB={
          brand:"Ventolin, Asthalin, Salbair, Salamol, S-Breathe",
         uses:"Uses: Bronchodilator, used for asthma and COPD.",
          composition:"Salbutamol (100 mcg per inhalation)",
         precautions:"Overuse can lead to worsened asthma,Caution in heart disease.",
           sideEffects:"Tremors, nervousness,Increased heart rate,Headache."
         } ;    
const PRED={
         brand:"Orapred, Predmet, Corticosteroid, Prenisolone, Deltasone",
          uses:"Anti-inflammatory, treats conditions like arthritis, allergies, and autoimmune disorders.",
            composition:" Prednisolone (5 mg, 10 mg)",
             precautions:"Long-term use can cause bone thinning, weight gain, diabetes,Taper dosage gradually to avoid adrenal suppression.",
              sideEffects:"Weight gain, mood changes,Fluid retention, high blood pressure,Increased risk of infection."
         };
const WARF={
            brand:"Coumadin, Warfar, Warna, Jantoven ",
              uses:" Anticoagulant, prevents blood clots (stroke, heart attack, DVT).",
             composition:"Warfarin (1 mg, 2 mg, 5 mg)",
               precautions:"Requires frequent blood tests (INR levels),Avoid certain foods (like vitamin K-rich foods) and medications.",
                sideEffects:"Bleeding, bruising,Allergic reactions,Hair loss, skin necrosis (rare)."
                 } ;                                                  


const medName={
                PARACETAMOL:PARA,
                IBUPROFEN:IBUP,
                AMOXICILLIN:AMOX,
                AZITHROMCIN:AZIT,
                CETIRIZINE:CETI,
                LORATADINE:LORA,
                RANIDINE:RANI,
                OMEPRAZOLE:OMEP,
                METFORMIN:METF,
                INSULIN:INSU,
                ASPIRIN:ASPI,
                LOSARTAN:LOSA,
                AMIODIPINE:AMIO,
                ATORVASTATIN:ATOR,
                FUROSEMIDE:FURO,
                LEVOTHYROXINE:LEVO,
                DIAZEPAM:DIAZ,
                SALBUTAMOL:SALB,
                PREDNISOLONE:PRED,
                WARFARIN:WARF
                          };

 