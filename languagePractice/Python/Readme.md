# Advanced Python Notes

> This is a collection of notes and examples of python to better myself as a python programmer.

<!-- toc -->
- [Design patterns](#design-patterns)
  * [What are Design Patterns?](#what-are-design-patterns)
  * [Why Use Design Patterns?](#why-use-design-patterns)
  * [Characteristics](#characteristics)
  * [Types of Design Patterns](#types-of-design-patterns)
  * [OOP Mechanisms Used](#oop-mechanisms-used)
- [What is OOP?](#what-is-oop)
   * [Core Concepts](#core-concepts)
        * [Objects](#objects)
        * [Classes](#classes)
        * [Inheritance](#inheritance)
        * [Polymorphism](#polymorphism)
    * [Pattern Context](#pattern-context)

<!-- end toc -->
## Design Patterns

#### What are Design Patterns?
- These patterns are well known solutions for reoccurring problems.
- Widely accepted solutions b the software development community.

#### Why Use Design Patterns?
- No need to reinvent the wheel.
- Systematic reuse of of design ideas or best practices yields lower cost and higher quality.

#### Characteristics
- Language neutral
- Dynamic
- Incomplete to promote customization

#### Types of Design Patterns
- Creational
    - Used to create objects in a systematic way.
    - Flexibility: Different subtypes can be created at runtime
- Structural
    - Establishes useful relationships between components in certain configurations.
    - To achieve the goal for both functional and non-functional requirements.
- Behavioral
    - best practices  for how objects interact with each other.
    - The focus is to define protocols to work together and to achieve a goal.
#### OOP Mechanisms Used
- Creation: Polymorphism
- Structural: Inheritance
- Behavioral: Methods and signatures

## What is OOP?
- Most modern programs support object-orientated programming
#### Core Concepts
##### Objects
- Represent entities in both problems and solutions.
- Need to have elements that represent all moving pieces of a solution
- Need to represent all of those entities interacting with the software from the problem domain.
- Example: Registration System
    - Participants are in problem domain.
    - Registration form is in the solutions domain.
    - Both are represented in the software

##### Classes
- Templates used to create objects to avoid creating them every time they are needed.
- Classes define objects in terms of
    Attributes | Methods
    ---------- | ---------
    Represents property of entity| Represents the behaviors of an entity
    Captures the state of the entity |  

##### Inheritance
- Establishes a relationship between classes as parent and child
- The child class:
    - Keeps the attributes and methods of the parent class
    - Adds new attributes or methods of its own
    - Overrides the existing methods of its parent
##### Polymorphism
- relies on inheritance
- Allows child classes to be instantiated and treated as the same type as its parent.
- Enables a parent class to be manifested into any of its child classes.

#### Pattern Context
- Consists of 
    - Participants
        - Classes involved to form a design pattern
        - Roles to accomplish the design patterns
    - Quality attributes
        - Consists of non functional requirements like usability, modification, reliability, etc.
        - Its over all effect on the software
    - Forces
        - various factors or tradeoffs one would consider when trying to adopt a design pattern. 
    - Consequences 
        - Side effects such as lagging in performance when trying to implement better security for example. 
        - Understanding when to use different design patterns is crucial to understand the tradeoffs when implemented.
#### Pattern Language
- The process of mastering important terms. Terms used to constitute a pattern language.
    - Names
        - Should become apart of the design process.
        - Should be meaningful and memorable
    - Context
        - provides the scenario when the patterns should be used
        - Provides more insight on when to use the pattern
    - Problem
        - Describes the design pattern used when addressing a challenge.
    - Solution
        Specified in terms of structures, and behaviors
    - Related Patterns
        - Used together with the pattern being described. Similar patterns can be implemented to complement each other. 
- Factory
    - Specializes in creating other objects.
    - This pattern is useful when you are not sure about what kind of objects you may need in your system or what class to use at run time. 
    - Scenario
        - Your pet shop was only selling dogs but now you want to sell cats.
        > see factory.py for example code.




