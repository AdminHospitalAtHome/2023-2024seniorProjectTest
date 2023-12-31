NOTE: All quotes are pulled from Kent Beck's book titled "Extreme Programing Explained: Embrace Change"

# 6.4.2 Stakeholder Needs and Requirements Definition process
## 1. Prepare for Stakeholder Needs and Requirements Definition
### a. Identify the stakeholders who have an interest in the software system throughout its lifecycle.
Outcome: a <br>
Implementation: The XP way to implement identification of stakeholders is through "Real Customer Interaction". As a developer you are not going to know all the potential people that could be affected by your software, but your customer knows their business and thus knows who the stakeholders will be.

### b. Define the stakeholder needs and requirements definition strategy.
Outcome: d, e, g <br>
Implementation: The XP way to implement a strategy of defining stakeholder needs and requirements is to get the customer and the stakeholders they identify integrated with the development team as quickly as possible. Once they are integrated, you create will be able to come up with stories that everyone agrees on need to be added to the system. Then by using weekly cycles you can address stakeholder interests week to week picking what people agree to be the most important thing right now, rather than trying to get people to agree whether over which features will be more important to another a year from now.

### c. Identify and plan for the necessary enabling systems or services needed to support stakeholder needs and requirements definition.
Outcome: c, h <br>
Implementation: The XP way to identify or plan for necessary enabling systems or services you will is to wait until you are actually implementing it. While you will get an idea of the rough types of enabling systems you will need when creating stories with the customer, you will not actually plan for how you will get them until you need them because of the process of incremental design. When the book says "Strive to make the design of the system an excellent fit for the needs of the system that day," this includes not worrying about how you will get systems until you need them because they are not needed to fit the needs of the system that day.

### d. Obtain or acquire access to the enabling systems or services to be used.
Outcome: h <br>
Implementation: Continuing on my last point, the time to obtain access to enabling systems or services is when they are needed. Since your understanding of what your program will need will improve overtime, you could end up wasting your time getting access to a system that it turns out will not fit your needs when it comes time to integrate it. This is exemplified when Beck's statement that "the most effective time to design is in the light of experience" because you can not choose what systems you will use without in some way constraining or affecting your future design.

## 2. Define Stakeholder Needs
### a. Define Context of use within the concept of operations and the preliminary life cycle concepts
Outcome: b <br>
Implementation: The XP way to determine the environment, or context, in which your software will be used goes back to what Beck calls "Real Customer Interaction." The stakeholders know best how and where the software will be used so why not just communicate with them. It is even better if you can spend time with them perhaps even shadowing them for a day or looking at how their current process works. In our project we were able to do this being shown how they currently monitor patients.

### b. Identify stakeholder needs.
Outcome: d <br>
Implementation: In XP, rather than interviewing separate stakeholders for their needs in a traditional sense, you would instead sit down with your stakeholders, or users, and have them help write stories. This replaces the traditional needs and has the customer picking each thing they want the software to do.

### c. Prioritize and down-select needs
Outcome: e <br>
Implementation: In XP, rather than trying to decide what stories (a combination in a sense of needs and features) are most important, you let the client prioritize them slowly overtime by using weekly cycles in which "Customers pick a week's worth of stories to implement."

### d. Define the stakeholder needs and rationale.
Outcome: d <br>
Implementation: Continuing what I previously stated in my answer to (b), defining the needs comes at the same point as identifying them as a customer will tell you an issue they are having and why. Then, you work with them to write it a story that solves the need.


## 3. Develop the operational concept and other life cycle concepts.
### a. Define a representative set of scenarios to identify the required capabilities that correspond to anticipated operational and other life cycle concepts.
Outcome: b, c, d <br>
Implementation: In XP, rather than trying to define a set of representative scenarios to identify required capabilities, you involve the customer on the team and then work with them to understand the REAL scenarios that the system will be used in. When you try to identify representative scenarios and operational concepts, you are acting as a 'proxy' customer which Beck says "leads to waste as you develop features that aren't used."

### b. Identify the factors affecting interactions between users and the system
Outcome: c <br>
Implementation: In XP, you identify factors that will affect the interactions between the user and system not only through hearing and experiencing them from the customer through "Real Customer Integration," but also through the value of "Respect." As Beck says "Every person whose life is touched by software development has equal value as a human being." Just as Beck talks about XPs focus on respecting your team mates and having compassion towards them, you need to do the same for the users of your system and take factors that could negatively impact the interaction between users an the system seriously.

## 4. Transform stakeholder needs into stakeholder requirements.
### a. Identify the constraints on a system solution.
Outcome: c <br>
Implementation: Rather than trying to focus on all constraints at the beginning of software development, XP two ways of going about this. If it is a major constraint such as the software needs to integrate with an existing system, that would be identified and written up as a story. This is done with the customer, or user, as Beck says "Users on an XP team help write and pick stories." In the event that it is a more minor constraint that is not very visible to the user, rather than trying to identify them at the beginning, use incremental design where you wait to identify or plan for it until it is the right time to do so.

### b. Identify the stakeholder requirements and functions that relate to critical quality characteristics, such as assurance, safety, security, environment, or health.
Outcome: e <br>
Implementation: Just as with identifying needs, identifying requirements is done through a process of "Real Customer Involvement" in which you work with the real users of the system to create stories. By having users write stories, they will be identifying the requirements that are related to quality such as "Complies with HIPPA." It is all about remembering that your customer is the domain expert, not you.

### c. Define Stakeholder requirements, consistent with life cycle concepts, scenarios, interactions, constraints, and critical quality characteristics.
Outcome: e, g, i <br>
Implementation: Similar to my what I discussed with the needs, in XP, having the user "write and pick stories" with you will mean that the process of identification and definition are combined into one single step that encompasses defining what the system will need to be able to do via "customer-visible functionality."

## 5. Analyze stakeholder requirements
### a. Analyze the complete set of stakeholder requirements
Outcome: e <br>
Implementation: In XP, rather than analyzing all the stakeholder requirements at one point in time, you identify issues and the requirements required to complete stories at quarterly and weekly cycle meetings. At quarterly meetings, you can "identify bottlenecks" then at weekly meetings when a client picks what stories they want implemented that week, you work with them to "Break the stories into tasks" which acts as analyzing the stakeholder requirements.

### b. Define critical performance measures that enable the assessment of technical achievement.
Outcome: f <br>
Implementation: In XP, defining critical performance measures is done through XPs approach to testing, in addition to automated test, when a customer assigns stories each week, they will give you what they believe is a measure of if the story is done to their satisfaction that you can then test against. This customer centric testing approach means they are defining the performance measures with your assistance.

### c. Feedback the analyzed requirements to applicable stakeholder to validate that their needs and expectations have been adequately captured and expressed.
Outcome: g <br>
Implementation: By making the collection and analysis of requirements be done with the customer when they "write and pick stories" and then "pick a week's worth of stories," you do not have to return to your stakeholder to ensure their needs and expectations are met, because they chose them wrote them with you.

### d. Resolve stakeholder requirements issues.
Outcome: g <br>
Implementation: Continuing on my previous points, in XP, if there are any requirements issues, they will be brought up by either you or the stakeholder at the time of writing or when the stakeholder is assigning stories for that week. If for example they say to do something that is not possible, you use Beck's value of "communication" to work through the problem.

## 6. Manage the stakeholder needs and requirements definition.
### a. Obtain explicit agreement with designated stakeholders on the stakeholder requirements.
Outcome: g <br>
Implementation: In XP, you get explicit agreement with the stakeholder about your requirements when both when you create stories with them and when they assign them at "Weekly Cycle" meetings. When you are writing a story with your stakeholder, they are actively involved in the process and should agree to each story before moving on. Then, when the stakeholder "picks a weeks worth of stories" you work with them to agree upon everything that story entails.

### b. Maintain traceability of stakeholder needs and requirements.
Outcome: i <br>
Implementation: Because XP substitutes having induvial needs and requirements with stories, rather than worrying about tracing needs and requirements together, you simply keep the stories visible on a "frequently-passed wall." In the event that you have an exceptionally large system with many stakeholders, you could write the name of the stakeholder for which each story should be traced to on the story card.

### c. Provide key artifacts and information items that have been selected for baselines.
Outcome: f <br>
Implementation: Saving and providing key artifacts and information items that have been previously selected for baselines goes against the principles of XP as in a sense this is all just documentation and documentation "rapidly grows obsolete." Instead in XP, you create stories with the client and as they are finished they are removed. There is no need to keep them as a baseline once they are created.

# 6.4.4 Architecture Definition process
## 1. Prepare for architecture definition.

### a. Review pertinent information and identify key drivers of the architecture.
Outcome: c <br>
Implementation: This task is implemented through incremental design. XP makes delivery of software in short iteration, which means the team can learn more about the problem. XP makes “the design of the system an excellent fit for the needs of the system that day”. It is also implemented through test-first programming. For the architecture, this involves testing performance and scalability. 

### b. Identify stakeholder concerns.
Outcome: a <br>
Implementation: This task is implemented through the Stories and Incremental design. With stories we are planning our development with “customer-visible functionality.” This essentially is identifying the functionalities of the application that addresses the stakeholder’s concerns. As we implement stories we design our architecture to make sure the functionality we add adhere to good design in our architecture. We are following incremental design which is “design done close to when it is used is more efficient.” We are designing the system with every progress made to the project. This allows us to meet stakeholder expectations and constraints without incurring any significant cost of resources.

### c. Define the Architecture Definition roadmap, approach, and strategy.
Outcome: b <br>
Implementation: This task is implemented through stories and continuous integration.
Stories are “units of customer-visible functionality” and they can be used to define what needs to be built and therefore create a roadmap, approaches and strategies. Continuous Integration can ensure that architectural changes do not break existing functionality.

### d. Define architecture evaluation criteria based on stakeholder concerns and key requirements.
Outcome: k, g <br>
Implementation: This task is implemented through user stories. Stories are “units of customer-visible functionality”. In XP, the key requirements are turned into stories. These stories provide the initial basis for defining what matters to stakeholders in the architecture.

### e. Identify and plan for the necessary enabling systems or services needed to support the Architecture Definition process.
Outcome: j <br>
Implementation: This task is implemented through continuous integration and incremental design. Continuous integration “integrate and test changes after no more than a couple of hours” allowing us to continuously integrate and test new systems or services added to our project. And through incremental design we can integrate services and systems into our architecture properly, and refine it as we go.

### f. Obtain or acquire access to the enabling systems or services to be used.
Outcome: j <br>
Implementation: This task is implemented through continuous integration (CI). CI is “Integrate and test changes after no more than a couple of hours”. XP ensures this task to be addressed in a continuous manner. Continuous integration gives early feedback which helps solve issues when they are small and less costly to fix.

## 2. Develop architecture viewpoints.
### a. Select, adapt, or develop viewpoints and model kinds based on stakeholder concerns.
Outcome: a,b <br>
Implementation: This task is implemented through user stories. Since stories are “units of customer-visible functionality”, they can capture requirements and concerns of stakeholders. 

### b. Establish or identify potential architecture framework(s) to be used in developing models and views.
Outcome: b,d <br>
Implementation: This test is implemented through incremental design. Through incremental design we “strive to make the design of the system an excellent fit for the needs of the system that day.” and that we design “in light of experience relevant to the system.” That means that when we’re developing our software we are also considering the architectural frameworks we need for the current interface or model and how it can be integrated into our system with proper design.

### c. Capture rationale for selection of framework(s), viewpoints and model kinds.
Outcome: i <br>
Implementation: This task is implemented through stories. According to XP the book, stories are written on “story cards on a wall”. When selecting framework(s), viewpoints, and model kinds, the reasoning might be captured directly on these cards. It can also be implemented through pair programming. Since most rationale are communicated verbally, they can be captured in pair programming sessions.

### d. Select or develop supporting modeling techniques and tools.
Outcome: d <br>
Implementation: There are many kinds of support modeling techniques and tools. For example, project management tools like Jira, continuous integration tools like github actions, version control tools like Git, and test tools like JUnit testing. These are all tools that can support development and can be selected in development.

## 3. Develop models and views of candidate architectures.
### a. Define software system context and boundaries in terms of interfaces and interactions with external entities. 
Outcome: c <br>
Implementation: This task is implemented through user stories. Since user stories are “units of customer-visible functionality”, they can be used to identify interactions. The stories can identify external entities as well.

### b. Identify architectural entities and relationships between entities that address key stakeholder concerns and critical software system requirements. 
Outcome: a <br>
Implementation: This task is implemented through stories and continuous integration. Stories as “units of customer-visible functionality” can help identify the entities and their relationships. Continuous Integration can help address those stakeholder concerns early and quickly.

## c. Allocate concepts, properties, characteristics, behaviors, functions, or constraints that are significant to architecture decisions of the software system to architectural entities. 
Outcome: e <br>
Implementation: The XP book emphasizes test-driven development and test-first programming, which means behaviors and functions can be firstly captured as tests. As long as test passes, these behaviors and functions are allocated. Pair-programming can help allocating them as well.

### d. Select, adapt, or develop models of the candidate architecture of the software system.
Outcome: d <br>
Implementation: This task can be implemented using incremental design. Incremental design “strives to make the design of the system an excellent fit for the needs of the system that day”. It allows developers to constantly improve design to adapt to new requirements. Pair programming is helpful as well since two heads working on the same task can get more optimal results.

### e. Compose views from the models in accordance with identified viewpoints to express how the architecture addresses stakeholder concerns and meets stakeholder and system/software requirements.
Outcome: a,k <br>
Implementation: This can be implemented through continuous feedback. Continuous feedback ensures stakeholder concerns are addressed early, so the project does not go far from requirements. A “short, clear feedback cycle” is important to guarantee all stakeholders’ concerns are addressed.

### f. Harmonize the architecture models and views with each other.
Outcome: d <br>
Implementation: This can be implemented through pair programming. Pair programming can allow different models and views shared upon pair rotations. Pairs can “hold each other accountable to the team’s practices”. This can help resolve discrepancies. Continuous Integration tools can also help harmonize the architecture models and views since they can generate architecture views automatically.

## 4. Relate the architecture to design.
### a. Identify software system elements that relate to architectural entities and the nature of these relationships.
Outcome: f <br>
Implementation: This is implemented through incremental design because incremental design means that “when your understanding of the best possible design leaps forward, work gradually but persistently to bring the design back into alignment with your understanding.” Incremental design requires the developers to understand all parts of the architecture and the relationships between those parts, so as we’re designing the system everyday we’re ensuring it relates to our architecture.

### b. Define the interface and interactions among the software system elements and external entities. 
Outcome: c <br>
Implementation: This is implemented with incremental design. Because we “strive to make the design of the system an excellent fit for the needs of the system that day” when we want to implement a story that integrates an external entity to our application, developers who are implementing the story will ensure that we maintain low coupling between our application and the external entity. If there is coupling between our system and external entity, through iteration and refactoring our design we make sure that we achieve low coupling.

### c. Partition, align, and allocate requirements to architectural entities and system elements.
Outcome: e,k <br>
Implementation:  In XP, requirements are captured through stories, this is partition requirements into chunks that align with the functionalities of the system. Because we’re designing in “small, safe steps” with incremental design, we allocate requirements to different parts of the system overtime by building and designing the architecture piece by piece. With incremental design we are also refactoring as we go. So we are reallocating and realigning our system to be more maintainable.

### d. Map software system elements and architectural entities to design characteristics.
Outcome: i <br>
Implementation:

### e. Define principles for the software system design and evolution.
Outcome: h <br>
Implementation: The principles we define for software design and evolution is incremental design, and incremental deployment. As we design our system in small steps we are also refactoring and refining existing designs. We can receive feedback from the client through incremental deployment at every stage of the application. This allows us to incorporate user feedback into the design of the software and improve it to meet the user’s needs.

## 5. Assess architecture candidates.
### a. Assess each candidate architecture against constraints and requirements.
Outcome: g,i <br>
Implementation: In the process of developing the software we do design “close to when it is used” because it is more efficient. In the light of the experience, the developer will assess which architectural candidates are best for the current system. 

### b. Assess each candidate architecture against stakeholder concerns using evaluation criteria.
Outcome: a,g <br>
Implementation: In XP, you would do this minimally at the time you implement the architecture because you design when you implement, and you should only consider the easiest way that works. 

### c. Select the preferred architecture(s) and capture key decisions and rationale.
Outcome: g,i <br>
Implementation: In XP, the most you should select is a metaphor for your architecture. Once you have done this you should not document anything else.

### d. Establish the architecture baseline of the selected architecture.
Outcome: h <br>
Implementation: The only thing you specify is the metaphor you are using so you should not worry about establishing a baseline.

## 6. Manage the selected architecture.
### a. Formalize the architecture governance approach and specify governance-related roles and responsibilities, accountabilities, and authorities related to design, quality, security, and safety.
Outcome: c <br>
Implementation:  In XP, you should not formalize anything beyond the metaphor.

### b. Obtain explicit acceptance of the architecture by stakeholders.
Outcome: a <br>
Implementation: This can be ensured by continuous feedback. “A short, clear feedback cycle” can make developers make first-minute changes to current issues and obtain acceptance of stakeholders. It can also be achieved by stories. Accurate stories that match stakeholders’ interest are beneficial to the development. 

### c. Maintain concordance and completeness of the architectural entities and their architectural characteristics.
Outcome: i <br>
Implementation: This can be implemented through test-first programming. Test-first programming allows identifying “explicitly and objectively what the program is supposed to do”. Therefore, it ensures the completeness of architecture and new features do not break current working code. Continuous integration forces frequent testing and can help maintain concordance as well.

### d. Organize, assess, and control evolution of the architecture models and views to help ensure that the architectural intent is met and the architectural vision and key concepts are correctly implemented. 
Outcome: d <br>
Implementation: This can be implemented through continuous integration and pair programming. Continuous integration involves frequent testing, which helps assess the evolution of the architecture models. Pair programming allows up-to-date sharing of architecture and brings different ideas upon pair switching, leading to a more organized model. As the XP book says, pair programming “holds each other accountable to the team’s practices”.

### e. Maintain the architecture definition and evaluation strategy.
Outcome: h <br>
Implementation: This can be implemented using test-driven development and test-first programming. Writing tests first ensures the architecture meets requirements. “If it’s hard to write a test, it’s a signal that you have a design problem”. 

### f. Maintain traceability of architecture.
Outcome: k <br>
Implementation: This can be implemented through stories since they can be a foundation for the architecture. Pair-programming can also help “keep each other on task” by spreading architecture updates in the team.

### g. Provide key artifacts and information items that have been selected for baselines.
Outcome: j <br>
Implementation: Stories are “customer-visible functionality” and can be used as a guide to select key artifacts and information items. Continuous integration ensures program is always built and tested, which also provides the key artifacts and information items for baseline.


# 6.4.5 Design Definition process
## 1. Prepare for software system design definition
### a. Define the design definition strategy, consistent with the selected life cycle model and anticipated design artifacts.
Outcome: a <br>
Implementation: In XP, the most you should design at the outset of the project is in choosing a analogy that the rest of your design for the project should focus on. For our team we went with the a '3-layer architecture' analogy. This is backed up by Beck who say's to "invest in the desing everyday." Your strategy thus is to wait until the "last responsible moment" to design each part of your system.

### b. Select and prioritize design principles and design characteristics.
Outcome: a <br>
Implementation: In XP, rather than selecting from a wide array design principles and characteristics at the beginning of your project and always working towards them, you instead focus mainly on always creating a system that is "Loosely coupled" and "highly cohesive." Throughout your incremental development you work to make sure that you are following these principles and know you are following them if your test are easy to write because as Beck says "If it's hard to write a test, it's a signal that you have a design problem."

### c. Identify and plan for the necessary enabling systems or services needed to support design definition.
Outcome: c, g <br>
Implementation: In XP, you do not plan what enabling systems or services you need to support your design definition in advance. Instead when you are assigned a story as a part of the weekly cycle, you find the best tool for the job and make it work. In the event that it would not cleanly fit into your code in a way that could easily be substitute, abstract out the enabling systems through use of interfaces in the case of using external SDKs or web services.

### d. Obtain or acquire access to the enabling systems or services to be used.
Outcome: g <br>
Implementation: In XP, continuing on my previous note of not planning what enabling systems you need in advance, you wait to obtain or acquire access enabling systems until you are assigned that story. Since your design may vary in some sense depending on what enabling systems you choose or are given access to, I will repeat my earlier statement where I pointed to Beck's statement that "the most effective time to design is in the light of experience" because you can not choose what systems you will use without in some way constraining or affecting your future design. Even when abstracting out using interfaces and adapter patter, until you get a hold of an enabling system, you often don't know all the specific methods you will need until you get to work implementing it.

## 2. Establish designs related to each software system element.
### a. Transform architectural and design characteristics into the design of software system elements.
Outcome: a <br>
Implementation: In XP, You convert your characteristics, such as how we use the metaphor of a 3-layer model, to the software system elements when you are assigned a story that needs it to be converted. So if your story needs access to a database, you design the database and how it will work/be connected to when your story is in progress. This follows XP's as Beck says "to keep the design investment in proportion to the needs of the system so far." 

### b. Define and prepare or obtain the necessary design enablers.
Outcome: c <br>
Implementation: In XP, you wait to define or even prepare to obtain design enablers until you need them. So if the story you are doing that week needs a particular algorithm, get the algorithm when you work on the story. Don't try to find out how you will get it until then.

### c. Examine design alternatives and feasibility of implementation.
Outcome: e <br>
Implementation: In XP, rather than trying to look at design alternatives and their feasibility up front, when it comes time to design something, simply find the simplest way to do it that works and do it that way. This follows Beck's XP value of "Simplicity."

### d. Refine or define the interfaces among the software system elements and with external entities.
Outcome: d <br>
Implementation: In XP, you define the interface that the software will use to external systems when you are implementing the testcases. Rather than designing interfaces first, you start by writing a test and then as Beck says, the "interface is designed to match the needs of the test."

### e. Establish the design artifacts.
Outcome: f <br>
Implementation: In, XP all, or nearly all, documentation should come from the tests so you should not be establishing design artifacts that will stay around forever and fall out of date. Beck explains that the reason for this is that "documentation of software is an example of a practice that violates mutual benefit." You should not slow down development now to record a bunch of information about your design that you then may not even use in the future, and even if you do want to use it in the future, it is likely to be out of date.


## 3. Assess alternatives for obtaining software system elements.
### a.	Determine technology required for each element composing the software system.
Outcome: b <br>
Implementation: An idea useful in the XP book for this task is to “do the simplest things that could possibly work”. Then developers improve through continuous feedback. Pair-programming can also help make help choosing suitable technologies since two people can help making better decisions.

### b.	Identify candidate alternatives for the software system elements.
Outcome: e <br>
Implementation: This can be implemented through refactoring and continuous integration. The design is likely to improve over time and continuous integration can help produce a “short, clear feedback cycle”, which is beneficial for this task. In addition, simplicity is crucial to help avoid writing unnecessary code.

### c. Assess each candidate alternative against criteria developed from expected design characteristics and element requirements to determine suitability for the inteded application.
Outcome: e <br>
Implementation: Test-first programming is extremely useful here. Test-first programming helps to “clarify ideas” and “hold each other accountable to the team’s practices”. This ensures that the current code is suitable for intended application. 

### d. Choose the preferred alternatives among candidate design solutions for the software system elements.
Outcome: e <br>
Implementation: This can be done by pair-programming. When working together on decision making, better decisions tend to be made. In addition, continuous feedback allows the team to be on track. Test-first programming can also help to address “coupling and cohesion” and can detect problems before writing the actual code.

## 4. Manage the design.
### a.	Capture the design and rationale.
Outcome: f <br>
Implementation: This can be done by creating stories using story cards. In XP book, Beck says that you can “put cards on a wall”, which is easy to reference when forgetting design and rationale. Pair-programming can also help reminding team members the current design and rationale and make sure they are spread across team. Continuous integration can be used to determine the system meets the requirement.

### b.	Establish tractability between the detailed design elements, the system/software requirements, and the architectural entities of the software system architecture.
Outcome: h <br>
Implementation: Stories can be used to understand the requirements. Test-first programming can help “continuous testing” and every small piece of small functionality is tested. Pair programming can make sure the designed documents are shared across the team.

### c.	 Determine the status of the software system and element design.
Outcome: b, f <br>
Implementation: Test-first programming can help determine the status before writing the actual code. If the test fails, this means there is something wrong with system and design. Continuous Integration helps getting immediate feedback on status of current system and design. “The longer you wait to integrate, the more it costs and the more unpredictable the cost becomes.”

### d.	Provide key artifacts and information items that have been selected for baselines.
Outcome: f <br>
Implementation: Stories can be used as reference for key artifacts and information items. “Sorting the cards spatially conveys information quickly.” Test-first programming can ensure that these artifacts and information meet the baseline requirements.
