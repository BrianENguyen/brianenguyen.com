import classes from './BlogView.module.css';
import AnimatedPage from '../../components/Animations/AnimatedPage';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { MyProgrammingHistoryPageTitle } from '../../components/Helper/PageTitleData';
import Highlight from 'react-highlight';

const MyProgrammingHistoryView = () => {
  useEffect(() => {
    document.title = MyProgrammingHistoryPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <Container style={{ marginTop: 200 + 'px' }} maxWidth='md'>
        <h1 className={classes['blog__title']}>My Programming History</h1>
        <div className={classes['blog__text']}>
          <p className={classes['blog__date']}>?????????????????</p>
          <p>
            Computer science is one of the most interesting fields in this
            world. With the exponential growth of technology, code is
            everywhere, like gaming consoles, TVs, even the web browser you're
            using to view this blog. As someone who was fascinated with
            technology since my childhood, choosing a career path related to
            technology was the right choice for me
          </p>
          <p>
            My first step in my career was taking my Intro to Programming class
            in high school. I heard that there was game development there, which
            interested me since I played video games since I was a child. I
            decided to take it, but I realize it was a mistake. The school
            council made my teacher instruct this class, but she didn't know
            anything about programming. She would make us read the book and
            practice programming there. To make matters worse, the language
            taught in the book was C, which was challenging to learn as a
            beginner. This class made me hate programming because I felt this
            difficulty applied to all programming.
          </p>
          <p>
            After graduating high school, I decided to try programming again at
            California State University, Long Beach. In my introductory computer
            science course, we've learned about Python, which was <em>way</em>{' '}
            easier than C. The first program that I was proud of calculated the
            area, circumference, surface area, and volume of a circle / sphere
            using the radius from user input. That script made me realize that
            programming is what I wanted to do for my future. Below are snippets
            of my program:
          </p>
          <Highlight language='python'>
            {`
"""
This program lets the user to choose what kind of option they would like to
calculate: the area of a circle, the circumference of a circle, the surface
area of a sphere, or the volume of the sphere. The program gets the user
to enter the radius; with that, the radius will be used to calculate
whatever the user chooses from the four options. If the user has an invalid
input, then the program will keep on looping until the user inputs something
valid.
"""

# Function to get the radius
def getRadius():
    while True:
        try:
            radius = int(input('Enter a positive integer for the radius: '))
            while radius < 1:
                print()
                radius = int(input('Enter a POSITIVE integer for the radius: '))
            return radius
        except ValueError:
            print()
            print('Invalid input. Please try again.')

# Function to calculate the area
def calcArea(radius):
     area = PI * (radius ** 2)
     return area

# Function to calculate the circumference
def calcCircumference(radius):
    circumference = 2 * PI * radius
    return circumference

# Function to calculate the surface area
def calcSurfaceArea(radius):
    surfaceArea = 4 * PI * (radius ** 2)
    return surfaceArea

# Function to calculate the volume
def calcVolume(radius):
    volume = (4 / 3) * PI * (radius ** 3)
    return volume

# Function to display the area
def displayArea(radius, area):

    print()
    print('Your radius is', radius)
    print('The area is', format(area, '.2f'))

# Function to display the circumference
def displayCircumference(radius, circumference):

    print()
    print('Your radius is', radius)
    print('The circumference is', format(circumference, '.2f'))

... 

#Main function
def main():

    #Menu
    print('--Calculate the _____ of a circle/sphere--')
    print('1) Area')
    print('2) Circumference')
    print('3) Surface Area')
    print('4) Volume')
    print()

    while True:
        choice = input('Enter the number of the option you would wish to use, or anything else to end the program: ')


        #Area
        if choice == '1':
            
            print()
            print('--Area--')
            radius = getRadius()
            area = calcArea(radius)
            displayArea(radius, area)
            print()

... 

main()
              `}
          </Highlight>
          <p>
            When I graduated from my university in 2020, I was lost in what I
            wanted to do with my degree. I first decided to do full-stack
            development, because my senior project class exposed it to me. I
            also decided to do information technology / system administration,
            because I recently started learning about Linux and making it my
            primary operating system. Eventually, I decided that those fields
            didn't interest me because they were too technical.
          </p>
          <p>
            It took me two years to finally decide what I wanted to:{' '}
            <strong>frontend development</strong>. This field allows me to
            express creativity in the applications I make. My sense of
            creativity and beauty comes from my passion for photography, and I
            hope to reflect them in my programming career.
          </p>
        </div>
      </Container>
    </AnimatedPage>
  );
};

export default MyProgrammingHistoryView;
