import classes from './BlogView.module.css';
import AnimatedPage from '../../components/Animations/AnimatedPage';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { MyProgrammingHistoryPageTitle } from '../../components/Helper/PageTitleData';

const VolunteeringTC = () => {
  useEffect(() => {
    document.title = MyProgrammingHistoryPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <Container style={{ marginTop: 200 + 'px' }} maxWidth='md'>
        <h1 className={classes['blog__title']}>
          Volunteering with the Tzu Chi Foundation
        </h1>
        <div className={classes['blog__text']}>
          <p className={classes['blog__date']}>2022-02-??</p>
          <p>
            In Chinese, "tzu" means "compassion," and "chi" means "relief."
            "With open arms and helping hands, our volunteers are here to serve
            you."
          </p>
          <h2 className={classes['blog__header']}>Starting My Journey</h2>
          <p>
            I started my Tzu Chi journey back in my freshman year of university
            in 2016, where I attended the Tzu Chi collegiate chapter of CSULB
            (also known as CSULB Tzu Ching). I heard about this organization
            from a friend in my class who attends their events. I heard that the
            organization holds volunteering events, so I decided to check it
            out. When I attended one of their meetings, I was surprised by the
            fact that they do a lot more than just volunteering; their
            volunteering efforts focus on a wide range of aspects, such as
            environmental protection, education, medicine, and disaster relief.
            In addition, they also focus on humanitarian culture and
            vegetarianism. I was intrigued and wanted to do more with this
            organization, so I participate in one of their volunteering events.
          </p>
          <p>
            My first volunteering event with them was at a medical outreach at a
            Tzu Chi medical clinic, where Tzu Chi volunteers provided free
            medical services, like vision, acupuncture, and flu shots, for those
            in need. For my volunteering role, I helped with Spanish
            translations and medical form fill outs. It was a fun experience for
            me to help others in need
          </p>
          <h2 className={classes['blog__header']}>
            Becoming an Officer / Starting My Passion in Photography
          </h2>
          <p>
            At one point during my first year with CSULB Tzu Ching, one of the
            officers couldn't fulfill her historian position. This position
            involves taking photos for the organization at events for
            documentation purposes. I was interested in this role because I had
            a DSLR camera that I didn't use much and thought this opportunity
            would help me develop my photography skills. I applied to the role
            and the officer board decided that I was a good fit for it. The
            president at the time told me that their decision was not mostly
            based on my photography skills, but rather my experience and
            dedication to the organization. I was elated for the opportunity to
            work with the officers, develop my photography skills, and help
            contribute to CSULB Tzu Ching.
          </p>
          <h2 className={classes['blog__header']}>Tzu Ching Social Day</h2>
          <p>
            The biggest event CSULB Tzu Ching has ever held was called Tzu Ching
            Social Day in February 25, 2017. This event is where Tzu Ching
            members from various southern California colleges gather at one
            college to get to hang out and know each other. CSULB Tzu Ching was
            the host of that year's Social Day event, and the theme for that
            event was environmental protection. Various Tzu Chings from other
            colleges, like UC Irvine, UC San Diego, and UC Southern California,
            attended this event. The CSULB Tzu Ching officer board taught the
            attendees how Tzu Chi promotes environmental protection by using
            recycled plastic to make clothes and promoting vegetarianism. This
            event was also the first event where I fulfilled my new historian
            role. This event was one of the most memorable events that we've
            hosted
          </p>
          <h2 className={classes['blog__header']}>
            Bridging the Gap for CSULB / UCI Collaborations
          </h2>
          <p>
            One day during the summer of 2017, I saw a senior-center
            volunteering event posted on UCI Tzu Ching's FaceBook. I was bored
            at that time, so I reached out to them to volunteer with them. On
            the day of that event, UCI Tzu Ching and I socialized with the
            seniors and did performances for them to help brighten their day. In
            addition, I was able to meet all of UCI Tzu Ching's officers and
            advisors.
          </p>
          <p>
            UCI Tzu Ching held another volunteering event during the summer,
            which is a tutoring event. In this event, we would tutor kids grades
            three, four, and five on reading, writing, math, and arts & crafts.
            I used to volunteer tutoring children when I was in elementary
            school, so attending this tutoring event brought back memories; it
            was also a pleasure tutoring the children with UCI Tzu Ching too.
          </p>
          <p>
            That day helped me form a deeper connection with the UCI Tzu Ching
            officers. We hung out after the tutoring event at a restaurant and
            we got to know each other more. In the months / years that followed,
            I would continue to volunteer with UCI Tzu Ching, which eventually
            led to them collaborating with CSULB Tzu Ching. This collaboration
            continued to this day, all because I was bored on a summer day.
          </p>
          <h2 className={classes['blog__header']}>
            Becoming the <em>Only</em> Officer for CSULB Tzu Ching and Leading
            It When No One Else Would
          </h2>
          <p>
            It started around 2018 when CSULB Tzu Ching started to experience
            rough years. The number of members who attend our events started to
            drop; not many were interested in our organization. At that time, I
            couldn't really figure out why. Not only this hurt our events, but
            it also hurt our chances of getting new officers to help us for the
            following school years. In 2018, we only had two officers that were
            leading CSULB Tzu Ching: the president at the time, and me, who
            became vice-president. Our events did not get many members, which
            caused me to be frustrated and depressed that our efforts have been
            for nothing.
          </p>
        </div>
      </Container>
    </AnimatedPage>
  );
};

export default VolunteeringTC;
