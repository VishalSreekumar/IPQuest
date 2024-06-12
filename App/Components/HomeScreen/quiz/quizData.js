const quizData = [
    {
        question: 'What is the primary purpose of a patent?',
        choices: [
            'To promote secrecy',
            'To encourage litigation',
            'To grant exclusive rights to inventors',
            'To hinder technological advancement'
        ],
        correctAnswer: 2
    },
    {
        question: 'How long does a utility patent typically last from the filing date?',
        choices: ['10 years', '15 years', '20 years', '25 years'],
        correctAnswer: 2
    },
    {
        question: 'Which type of patent protects the ornamental design or appearance of an object?',
        choices: ['Utility Patent', 'Design Patent', 'Plant Patent', 'Process Patent'],
        correctAnswer: 1
    },
    {
        question: 'What term is used to describe entities that acquire patents primarily for enforcement against alleged infringers?',
        choices: ['Patent Seekers', 'Patent Enforcers', 'Patent Guardians', 'Patent Trolls'],
        correctAnswer: 3
    },{
        question: 'What criteria must be met for an invention to be eligible for a utility patent?',
        choices: [
            'Novel, functional, and obvious',
            'Novel, non-functional, and non-obvious',
            'Common, functional, and innovative',
            'Obvious, novel, and functional'
        ],
        correctAnswer: 1
    },
    {
        question: 'When does the duration of a design patent begin?',
        choices: [
            'From the filing date',
            'From the date of issuance',
            'From the date of invention',
            'From the date of disclosure'
        ],
        correctAnswer: 1
    },
    {
        question: 'What is the first step in the patent application process?',
        choices: [
            'Drafting the Patent Application',
            'Invention Disclosure',
            'Patent Search',
            'Filing the Application'
        ],
        correctAnswer: 1
    },
    {
        question: 'What is the primary impact of patent trolls on innovation?',
        choices: [
            'Fostering creativity',
            'Encouraging collaboration',
            'Stifling innovation through litigation',
            'Improving product development'
        ],
        correctAnswer: 2
    },
    {
        question: 'What is a patent thicket, and how does it affect innovation?',
        choices: [
            'A dense forest with patent offices',
            'A barrier to entry for inventors',
            'A web of overlapping patents hindering innovation',
            'A collection of high-quality patents'
        ],
        correctAnswer: 2
    },
    {
        question: 'What is the purpose of maintenance fees in the patent system?',
        choices: [
            'Funding the patent office',
            'Discouraging patent applications',
            'Keeping patents in force',
            'Encouraging patent litigation'
        ],
        correctAnswer: 2
    },
    {
        question: 'What challenge is associated with the rising number of patents, according to critics?',
        choices: [
            'Increased innovation',
            'Decreased patent quality',
            'Streamlined examination processes',
            'Enhanced intellectual property protection'
        ],
        correctAnswer: 1
    },
    {
        question: 'What is the duration of a plant patent from the filing date?',
        choices: ['10 years', '15 years', '20 years', '25 years'],
        correctAnswer: 2
    },
    {
        question: 'What are the three criteria for an invention to be eligible for a plant patent?',
        choices: [
            'Novel, functional, and common',
            'Novel, non-functional, and non-obvious',
            'Common, functional, and innovative',
            'Obvious, novel, and functional'
        ],
        correctAnswer: 1
    },
    {
        question: 'What is the significance of the Patent Cooperation Treaty (PCT) in the patent application process?',
        choices: [
            'It grants exclusive rights to inventors',
            'It streamlines the examination process',
            'It allows filing for patents internationally',
            'It reduces maintenance fees'
        ],
        correctAnswer: 2
    },
    {
        question: 'What role does a patent attorney or agent play in the patent application process?',
        choices: [
            'Conducting patent searches',
            'Drafting the patent application',
            'Granting patents',
            'Enforcing patents against infringers'
        ],
        correctAnswer: 1
    },
    {
        question: 'What challenges may companies face in navigating through patent thickets?',
        choices: [
            'Decreased costs',
            'Delays and increased costs',
            'Streamlined processes',
            'Improved collaboration'
        ],
        correctAnswer: 2
    },
    {
        question: 'What is the primary argument of critics regarding the rising number of patents?',
        choices: [
            'Improved patent quality',
            'Enhanced innovation',
            'Decreased patent quality',
            'Efficient examination processes'
        ],
        correctAnswer: 2
    },
    {
        question: 'What is the primary impact of patents on inventors, according to the conclusion of the provided content?',
        choices: [
            'Hinder progress',
            'Foster secrecy',
            'Provide protection and incentive',
            'Discourage creativity'
        ],
        correctAnswer: 2
    },
    {
        question: 'How long does a design patent last from the date of issuance?',
        choices: ['10 years', '15 years', '20 years', '25 years'],
        correctAnswer: 1
    },
    {
        question: 'What is the role of the patent search in the patent application process?',
        choices: [
            'Disclosing the invention',
            'Determining patent quality',
            'Ensuring novelty and non-infringement',
            'Navigating patent thickets'
        ],
        correctAnswer: 2
    },
    {
        question: 'What term is used to describe entities that acquire patents primarily for enforcement against alleged infringers?',
        choices: ['Patent Seekers', 'Patent Enforcers', 'Patent Guardians', 'Patent Trolls'],
        correctAnswer: 3
    },{
        question: 'What is the primary purpose of copyright?',
        choices: [
            'To restrict creativity',
            'To incentivize creativity by granting exclusive rights',
            'To control access to knowledge',
            'To limit the use of original works'
        ],
        correctAnswer: 1
    },
    {
        question: 'Which organization facilitates international copyright protection among member countries?',
        choices: [
            'World Intellectual Property Organization',
            'United Nations',
            'Copyright Registration International',
            'International Copyright Consortium'
        ],
        correctAnswer: 0
    },
    {
        question: 'What is the voluntary nature of copyright registration, and what advantages does registration provide?',
        choices: [
            'Automatic protection; no advantages',
            'Automatic protection; ability to sue for damages',
            'Mandatory protection; legal advantages',
            'Voluntary protection; limited legal benefits'
        ],
        correctAnswer: 1
    },
    {
        question: 'What rights are granted by copyright?',
        choices: [
            'Reproduction, distribution, and public access rights',
            'Exclusive rights, distribution, and public performance rights',
            'Reproduction, distribution, and public performance/display rights',
            'Reproduction, distribution, and private performance rights'
        ],
        correctAnswer: 2
    },
    {
        question: 'What does the concept of fair use allow for in copyright?',
        choices: [
            'Unlimited use of copyrighted material',
            'Limited use for criticism, commentary, and research without permission',
            'Commercial use without attribution',
            'Public performance without restrictions'
        ],
        correctAnswer: 1
    },
    {
        question: 'What is the major challenge associated with digital copyright in the modern era?',
        choices: [
            'Lack of digital distribution',
            'Unauthorized distribution and piracy',
            'Limited access to digital works',
            'Overregulation of digital content'
        ],
        correctAnswer: 1
    },
    {
        question: 'What are orphan works in the context of copyright?',
        choices: [
            'Works created by unknown artists',
            'Works in the public domain',
            'Works for which the copyright owner is difficult to identify or locate',
            'Works without any artistic merit'
        ],
        correctAnswer: 2
    },
    {
        question: 'What legislative solutions are mentioned in addressing orphan works?',
        choices: [
            'Digital Millennium Copyright Act',
            'Berne Convention',
            'Copyright Renewal Act',
            'Efforts involving legislative solutions'
        ],
        correctAnswer: 3
    },
    {
        question: 'Which exclusive right allows the copyright owner to reproduce the work in various forms?',
        choices: [
            'Distribution Right',
            'Public Performance Right',
            'Reproduction Right',
            'Fair Use Right'
        ],
        correctAnswer: 2
    },
    {
        question: 'How does the conclusion describe the nature of copyright in response to technological advancements and cultural changes?',
        choices: [
            'Static and unchanging',
            'Dynamic and evolving',
            'Restrictive and outdated',
            'Inaccessible and complex'
        ],
        correctAnswer: 1
    },{
        question: 'What is the primary goal of the Berne Convention in the context of copyright?',
        choices: [
            'To restrict international copyright protection',
            'To promote digital copyright issues',
            'To recognize the copyright of works among member countries',
            'To enforce copyright globally'
        ],
        correctAnswer: 2
    },
    {
        question: 'What advantage does copyright registration provide in terms of legal remedies?',
        choices: [
            'No legal advantages',
            'Ability to sue for statutory damages and attorney\'s fees',
            'Automatic protection against infringement',
            'Exemption from fair use limitations'
        ],
        correctAnswer: 1
    },
    {
        question: 'In many jurisdictions, when does copyright protection become automatic?',
        choices: [
            'Upon publication of the work',
            'Upon approval by the copyright office',
            'Upon creation of the work without the need for formal registration',
            'Upon expiration of the copyright term'
        ],
        correctAnswer: 2
    },
    {
        question: 'What is the significance of fair use in copyright law?',
        choices: [
            'It restricts the use of copyrighted material',
            'It allows unlimited use of copyrighted material',
            'It provides exemptions for commercial use',
            'It permits limited use without permission for specific purposes'
        ],
        correctAnswer: 3
    },
    {
        question: 'Which international treaty addresses digital copyright issues on a global scale?',
        choices: [
            'Copyright Registration International Treaty',
            'Digital Millennium Copyright Act',
            'Berne Convention',
            'World Intellectual Property Organization Copyright Treaty'
        ],
        correctAnswer: 3
    },
    {
        question: 'What is the purpose of the World Intellectual Property Organization Copyright Treaty?',
        choices: [
            'To restrict international copyright protection',
            'To facilitate international copyright protection by recognizing the copyright of works',
            'To enforce copyright globally without exceptions',
            'To promote unauthorized digital distribution'
        ],
        correctAnswer: 1
    },
    {
        question: 'What rights does copyright provide in terms of public performance and display?',
        choices: [
            'Exclusive rights',
            'Limited rights',
            'Restricted rights',
            'No rights for public performance and display'
        ],
        correctAnswer: 0
    },
    {
        question: 'What challenge is mentioned in balancing the interests of copyright, according to the content?',
        choices: [
            'Lack of interest in copyright',
            'Striking a balance between protecting rights and ensuring access',
            'Excessive protection of copyright',
            'Complete disregard for copyright'
        ],
        correctAnswer: 1
    },
    {
        question: 'How is the goal of copyright related to economic benefits for creators?',
        choices: [
            'By limiting access to creative works',
            'By providing exclusive rights to creators',
            'By discouraging creativity',
            'By promoting piracy and unauthorized distribution'
        ],
        correctAnswer: 1
    },
    {
        question: 'What term is used to describe works in the public domain?',
        choices: [
            'Open Access Works',
            'Copyright-Free Works',
            'Unrestricted Works',
            'Works with Expired Copyright'
        ],
        correctAnswer: 3
    },{
        question: 'What is the primary purpose of trademarks?',
        choices: [
            'To limit brand recognition',
            'To stifle market differentiation',
            'To foster brand recognition, customer loyalty, and market differentiation',
            'To discourage customer trust'
        ],
        correctAnswer: 2
    },
    {
        question: 'What is the definition of a trademark?',
        choices: [
            'Any symbol used by a business',
            'A distinctive sign, symbol, logo, name, or combination identifying and distinguishing goods or services',
            'A generic term for a business',
            'A legally protected business name'
        ],
        correctAnswer: 1
    },
    {
        question: 'Which type of trademark includes both words and design elements?',
        choices: ['Word Marks', 'Design Marks', 'Combined Marks', 'Service Marks'],
        correctAnswer: 2
    },
    {
        question: 'What does trade dress encompass?',
        choices: [
            'Exclusive rights to use a trademark',
            'The appearance and image of a product, including packaging and design',
            'Trademark licensing conditions',
            'Service mark protection'
        ],
        correctAnswer: 1
    },
    {
        question: 'Why is trademark registration considered important?',
        choices: [
            'It limits the use of trademarks',
            'It provides a legal presumption of ownership and exclusive rights',
            'It only applies to federal protection in the United States',
            'It restricts protection to specific states'
        ],
        correctAnswer: 1
    },
    {
        question: 'What is the primary focus of the examination process in trademark registration?',
        choices: [
            'Quality control',
            'Compliance with legal requirements',
            'Enforcement strategies',
            'Trademark licensing conditions'
        ],
        correctAnswer: 1
    },
    {
        question: 'What do trademark owners have exclusive rights to in connection with their goods or services?',
        choices: [
            'Unlimited use in any context',
            'Use in any country',
            'Use in commerce as specified',
            'Use for a limited duration'
        ],
        correctAnswer: 2
    },
    {
        question: 'What is the definition of trademark bullying?',
        choices: [
            'Using trademarks to encourage healthy competition',
            'Harassing smaller businesses using trademark rights',
            'Legitimate enforcement of trademark rights',
            'Encouraging fair use of trademarks'
        ],
        correctAnswer: 1
    },
    {
        question: 'What term describes the transformation of a trademark into a generic term?',
        choices: ['Generosity', 'Genericization', 'Genericide', 'Generativity'],
        correctAnswer: 2
    },
    {
        question: 'What is a challenge associated with cultural sensitivity in trademarks?',
        choices: [
            'Encouraging cultural appropriation',
            'Ignoring public backlash',
            'Finding a balance between cultural expression and trademark protection',
            'Limiting cultural expression'
        ],
        correctAnswer: 2
    },
    {
        question: 'What does the term "genericide" refer to in trademarks?',
        choices: [
            'The generosity of a trademark owner',
            'The transformation of a trademark into a generic term',
            'The unique characteristics of a trademark',
            'The process of registering a trademark internationally'
        ],
        correctAnswer: 1
    },
    {
        question: 'In trademark registration, what occurs during the "Publication and Opposition" stage?',
        choices: [
            'Trademark examination for compliance',
            'Approval of the trademark application',
            'Third parties have an opportunity to oppose the registration',
            'Issuance of the registration certificate'
        ],
        correctAnswer: 2
    },
    {
        question: 'What is the purpose of trademark licensing?',
        choices: [
            'To restrict the use of a trademark',
            'To eliminate quality control',
            'To allow unlimited use by third parties',
            'To permit a third party to use the trademark under specified conditions'
        ],
        correctAnswer: 3
    },
    {
        question: 'How do trademark owners prevent confusion among consumers regarding their marks?',
        choices: [
            'By limiting the use of similar marks',
            'By promoting generic terms',
            'By encouraging genericide',
            'By avoiding trademark enforcement'
        ],
        correctAnswer: 0
    },
    {
        question: 'What does the term "trade dress" encompass?',
        choices: [
            'Quality control measures',
            'Overall appearance and image of a product, including packaging and design',
            'Trademark licensing conditions',
            'Exclusive rights for trademark use'
        ],
        correctAnswer: 1
    },
    {
        question: 'What is the global impact of federal trademark registration in the United States?',
        choices: [
            'Limited to specific states',
            'Provides protection in all countries',
            'Offers protection across the entire country',
            'Applies only to federal entities'
        ],
        correctAnswer: 2
    },
    {
        question: 'In the context of trademarks, what are "combined marks"?',
        choices: [
            'Marks that combine two different products',
            'Marks that combine words and design elements',
            'Marks that combine service and product elements',
            'Marks that combine colors and shapes'
        ],
        correctAnswer: 1
    },
    {
        question: 'How do trademarks contribute to market differentiation?',
        choices: [
            'By promoting generic terms',
            'By limiting brand recognition',
            'By fostering brand recognition',
            'By encouraging confusion among consumers'
        ],
        correctAnswer: 2
    },
    {
        question: 'What legal action may trademark owners take against infringement?',
        choices: [
            'Encouragement letters',
            'Cease and desist letters and litigation',
            'Public apologies',
            'No legal action allowed'
        ],
        correctAnswer: 1
    },
    {
        question: 'What is the ongoing challenge mentioned in balancing cultural expression and trademark protection?',
        choices: [
            'Promoting cultural appropriation',
            'Ignoring cultural sensitivity',
            'Balancing between cultural expression and trademark protection',
            'Eliminating cultural diversity'
        ],
        correctAnswer: 2
    },{
        question: 'What is the primary scope of design rights?',
        choices: [
            'Protection of trade secrets',
            'Protection of manufacturing processes',
            'Protection of the visual appearance or ornamentation of a product',
            'Protection of functional aspects of a product'
        ],
        correctAnswer: 2
    },
    {
        question: 'What is the key distinction between registered and unregistered design rights?',
        choices: ['Duration', 'Scope', 'Pre-filing search requirement', 'Exclusivity'],
        correctAnswer: 0
    },
    {
        question: 'How is the duration of registered designs typically determined?',
        choices: [
            'By the complexity of the design',
            'By the date of first public disclosure',
            'By the jurisdiction and type of design',
            'By the level of innovation'
        ],
        correctAnswer: 2
    },
    {
        question: 'What is the purpose of the pre-filing search in the design registration process?',
        choices: [
            'To submit the design application',
            'To examine the application for compliance',
            'To ensure the design is novel and doesn\'t infringe on existing designs',
            'To oppose the registration'
        ],
        correctAnswer: 2
    },
    {
        question: 'What may competitors attempt to do in response to existing registered designs?',
        choices: [
            'Engage in copycatting and counterfeiting',
            'Design around the existing designs',
            'Challenge the duration of design rights',
            'File oppositions against the designs'
        ],
        correctAnswer: 1
    },
    {
        question: 'What is the term used to describe the unauthorized reproduction of designs using 3D printing technology?',
        choices: ['Digital replication', 'Virtual challenges', 'Counterfeiting', '3D copying'],
        correctAnswer: 3
    },
    {
        question: 'What challenges do digital replication and 3D printing pose to design rights?',
        choices: [
            'Increased enforcement efficiency',
            'Challenges in online marketplace navigation',
            'Promotion of design innovation',
            'Limited impact on design protection'
        ],
        correctAnswer: 1
    },
    {
        question: 'How does the duration of unregistered designs compare to registered designs?',
        choices: ['Longer duration', 'Same duration', 'Shorter duration', 'No specific duration'],
        correctAnswer: 2
    },
    {
        question: 'What potential conflicts may arise concerning design rights?',
        choices: [
            'Conflicts with patent rights',
            'Conflicts with manufacturing rights',
            'Conflicts with other intellectual property rights like copyright and trademarks',
            'Conflicts with trade secrets'
        ],
        correctAnswer: 2
    },
    {
        question: 'What is the primary role of design rights in the realm of creativity and innovation?',
        choices: [
            'Limiting creativity',
            'Hindering innovation',
            'Fostering creativity and protecting innovative designs',
            'Restricting access to innovative designs'
        ],
        correctAnswer: 2
    },
    {
        question: 'What is the primary benefit of obtaining exclusive rights through registered designs?',
        choices: ['Longer duration', 'Wider scope of protection', 'No need for pre-filing search', 'Exemption from examination'],
        correctAnswer: 1
    },
    {
        question: 'What does the term "design around" refer to in the context of design rights?',
        choices: [
            'Creating designs inspired by existing registered designs',
            'Navigating through design challenges',
            'Ignoring existing designs',
            'Counterfeiting existing designs'
        ],
        correctAnswer: 0
    },
    {
        question: 'What is the significance of a registration certificate in the design registration process?',
        choices: [
            'It proves the complexity of the design',
            'It exempts the design from examination',
            'It issues a legal presumption of ownership',
            'It prevents publication and opposition'
        ],
        correctAnswer: 2
    },
    {
        question: 'What is the primary focus of unregistered design rights?',
        choices: [
            'Longer duration',
            'Wider scope of protection',
            'Immediate protection upon creation',
            'Exemption from opposition'
        ],
        correctAnswer: 2
    },
    {
        question: 'How does the concept of "design rights" contribute to the protection of innovation?',
        choices: [
            'By limiting access to innovative designs',
            'By fostering creativity and protecting innovative designs',
            'By promoting digital replication',
            'By excluding 3D printing technology'
        ],
        correctAnswer: 1
    },
    {
        question: 'What potential impact does the rise of copycat products and counterfeiting have on design rights?',
        choices: [
            'Promotion of design innovation',
            'Challenges in design enforcement',
            'Reduction in the duration of design rights',
            'Increased access to design protection'
        ],
        correctAnswer: 1
    },
    {
        question: 'How do design rights contribute to global perspectives in intellectual property?',
        choices: [
            'By limiting protection to specific jurisdictions',
            'By providing universal protection across all countries',
            'By promoting regional protection only',
            'By excluding certain countries from protection'
        ],
        correctAnswer: 1
    },
    {
        question: 'What is the primary goal of the pre-filing search in design registration?',
        choices: [
            'To ensure the design is novel and doesn\'t infringe on existing designs',
            'To oppose the registration of designs',
            'To promote digital replication',
            'To challenge the duration of design rights'
        ],
        correctAnswer: 0
    },
    {
        question: 'How can clear distinctions and legal advice help in navigating overlapping rights?',
        choices: [
            'By promoting legal conflicts',
            'By ignoring potential conflicts',
            'By creating confusion among consumers',
            'By preventing and resolving conflicts'
        ],
        correctAnswer: 3
    },
    {
        question: 'What is the ongoing challenge mentioned in the conclusion regarding design rights?',
        choices: [
            'Lack of innovation in design',
            'Challenges in global enforcement',
            'The static nature of design protection',
            'Evolving in response to a dynamic and interconnected world'
        ],
        correctAnswer: 3
    }

];
export default quizData;