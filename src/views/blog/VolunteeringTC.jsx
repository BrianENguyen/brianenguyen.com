import React from 'react';
import classes from './BlogView.module.css';
import AnimatedPage from '../../components/animations/AnimatedPage';
import { ImageList, ImageListItem } from '@mui/material';
import { useEffect } from 'react';
import PageContainer from '../../components/ui/page-container/PageContainer';
import { VolunteeringTCPageTitle } from '../../helper/PageTitleData';

const VolunteeringTC = () => {
  useEffect(() => {
    document.title = VolunteeringTCPageTitle;
  }, []);

  return (
    <AnimatedPage>
      <PageContainer
        style={{ marginTop: 200 + 'px' }}
        maxWidth='md'
        href='/blog'
      >
        <h1 className={classes['blog__title']}>
          Volunteering with the Tzu Chi Foundation
        </h1>
        <div className={classes['blog__text']}>
          <p className={classes['blog__date']}>2022-02-16</p>
          <p>
            In Chinese, "tzu" means "compassion," and "chi" means "relief."
            "With open arms and helping hands, our volunteers are here to serve
            you." The Tzu Chi Foundation is a global relief organization that
            focuses on charity, medicine, education, and humanistic culture.
            This blog documents my experiences with this organization starting
            from 2016 up until now.
          </p>
          <h2 className={classes['blog__header']}>Starting My Journey</h2>
          <p>
            I began my Tzu Chi journey during my freshman year of university in
            2016, when I joined the Tzu Chi collegiate chapter at CSULB (also
            known as CSULB Tzu Ching). I learned about this organization from a
            friend in my class who attends their events. Upon hearing that the
            organization holds volunteering events, I decided to attend one to
            see what it was all about. To my surprise, I discovered that they do
            much more than just volunteer work. Their volunteering efforts focus
            on a wide range of areas, including environmental protection,
            education, medicine, and disaster relief, as well as humanitarian
            culture and vegetarianism. Intrigued by their mission, I became more
            involved in their events and activities.
          </p>
          <p>
            My first volunteering event with them was at a medical outreach
            event held at a Tzu Chi medical clinic, where Tzu Chi volunteers
            provided free medical services such as vision care, acupuncture, and
            flu shots to those in need. During the event, I helped with Spanish
            translations and medical form fill-outs as part of my volunteering
            role. It was a fulfilling experience to assist those in need.
          </p>
          <ImageList variant='masonry' cols={1} gap={10}>
            <ImageListItem>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_wilmington.jpg'
                srcSet='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_wilmington.jpg'
                loading='lazy'
                alt='CSULB Tzu Ching group at the medical outreach volunteer event'
              />
            </ImageListItem>
          </ImageList>

          <h2 className={classes['blog__header']}>
            Becoming an Officer / Starting My Passion in Photography
          </h2>
          <p>
            During my first year with CSULB Tzu Ching, an officer was unable to
            fulfill her role as historian, which involved taking photos at
            events for documentation purposes. As someone who owned a DSLR
            camera but didn't use it much, I was interested in the position and
            applied for it. The officer board found me to be a good fit and was
            offered the position. The president of the organization told me that
            my photography skills were not the primary factor in their decision,
            but rather my dedication to the organization. I was thrilled for the
            chance to work with the officers, improve my photography abilities,
            and contribute to CSULB Tzu Ching through this role.
          </p>
          <h2 className={classes['blog__header']}>Tzu Ching Social Day</h2>
          <p>
            The largest event ever held by CSULB Tzu Ching was the Tzu Ching
            Social Day on February 25, 2017. This yearly event brought together
            Tzu Ching members from various southern California colleges for a
            day of socializing and getting to know one another. CSULB Tzu Ching
            hosted the event, with a focus on environmental protection as the
            theme. Attendees included Tzu Ching members from other colleges such
            as UC Irvine, UC San Diego, and UC Southern California. During the
            event, the CSULB Tzu Ching officer board gave a presentation on how
            Tzu Chi promotes environmental protection through initiatives such
            as using recycled plastic to make clothes and promoting
            vegetarianism. This event was also significant for me, as I
            fulfilled my new role as historian, and it remains one of the most
            memorable events we've hosted.
          </p>
          <ImageList variant='masonry' cols={2} gap={10}>
            <ImageListItem>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_socialday1.jpg'
                srcSet='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_socialday1.jpg'
                loading='lazy'
                alt='Presenting in front of the attendees. Information about me listed in the background'
              />
            </ImageListItem>

            <ImageListItem>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075364/BEN_Website/blog/VolunteeringTC/BEN_socialday2.jpg'
                srcSet='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075364/BEN_Website/blog/VolunteeringTC/BEN_socialday2.jpg'
                loading='lazy'
                alt='Wide range view of attendees at social day'
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075443/BEN_Website/blog/VolunteeringTC/BEN_socialday__3.jpg'
                srcSet='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075443/BEN_Website/blog/VolunteeringTC/BEN_socialday__3.jpg'
                loading='lazy'
                alt='CSULB Tzu Ching group at social day'
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075443/BEN_Website/blog/VolunteeringTC/BEN_socialday4.jpg'
                srcSet='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075443/BEN_Website/blog/VolunteeringTC/BEN_socialday4.jpg'
                loading='lazy'
                alt='Tzu Ching group collaborating on an acitivity'
              />
            </ImageListItem>
          </ImageList>
          <h2 className={classes['blog__header']}>
            Bridging the Gap for CSULB / UCI Collaborations
          </h2>
          <p>
            During the summer of 2017, I stumbled upon a senior-center
            volunteering event posted on UCI Tzu Ching's Facebook page. Seeking
            an opportunity to do something meaningful, I contacted them and was
            soon volunteering alongside UCI Tzu Ching members. We spent the day
            socializing with seniors and performing to help brighten their day.
            It was during this event that I met all of UCI Tzu Ching's officers
            and advisors.
          </p>
          <p>
            As the summer progressed, UCI Tzu Ching held another volunteering
            event, a tutoring session for kids in grades three, four, and five.
            As someone who had tutored children in the past, this event was
            particularly meaningful to me, and I was thrilled to be able to
            participate alongside UCI Tzu Ching.
          </p>
          <p>
            After the tutoring event, we hung out at a restaurant and got to
            know each other better. This experience helped me form connections
            with the UCI Tzu Ching officers, and in the months and years that
            followed, I continued to volunteer with them. This eventually led to
            a collaboration with CSULB Tzu Ching, which continues to this day.
            It all started with me being bored on a summer day and seeking a way
            to make a difference.
          </p>
          <ImageList variant='masonry' cols={2} gap={10}>
            <ImageListItem>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_seniorcenter.jpg'
                srcSet='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_seniorcenter.jpg'
                loading='lazy'
                alt='Balloon passing activity with the seniors'
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_tutoring1.jpg'
                srcSet='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_tutoring1.jpg'
                loading='lazy'
                alt='Group of Tzu Ching volunteers and kids grades 3-5'
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_tutoring2.jpg'
                srcSet='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_tutoring2.jpg'
                loading='lazy'
                alt='Tzu Ching member and kids smiling at the camera'
              />
            </ImageListItem>
          </ImageList>
          <h2 className={classes['blog__header']}>
            Becoming the <em>Only</em> Officer for CSULB Tzu Ching and Leading
            It When No One Else Would
          </h2>
          <p>
            Around 2018, CSULB Tzu Ching experienced a decline in membership,
            which hurt our events and the chances of recruiting new officers for
            the following school years. As vice-president, I couldn't understand
            why this was happening and felt frustrated and depressed about the
            situation. At the end of the 2018-2019 school year, we were unable
            to fill officer positions, and I was ready to give up. However, my
            advisors convinced me to continue with their support, and I went
            into the 2019-2020 school year as the only officer.
          </p>

          <p>
            During the club fair event, which my advisors, a few past members,
            and I volunteered for, we were able to get around 100 people to sign
            up for our mailing list in just two days. Although this number was
            high, I had low expectations due to our low turnout rates in the
            past. I wasn't expecting many people to attend our first meeting
            that year.
          </p>
          <p>
            On September 9, 2019, the first meeting was scheduled to be held. I
            arrived at the meeting room an hour early to prepare. However, I was
            not expecting a big turnout, and thought only five people would show
            up. Twenty minutes before the meeting, one person arrived, which was
            unusual because we never had someone show up that early. But then, a
            few minutes later, more people started showing up one by one.
            Outside the room, there was even a line of people waiting to get in.
            To my surprise, past officers and members of CSULB Tzu Ching, my
            friend from high school, and even my dad showed up. I couldn't
            believe my eyes and felt overwhelmed with emotion.
          </p>
          <ImageList variant='masonry' cols={2} gap={10}>
            <ImageListItem>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_orientation1.jpg'
                srcSet='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_orientation1.jpg'
                loading='lazy'
                alt='Me presenting at the first GM'
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075364/BEN_Website/blog/VolunteeringTC/BEN_orientation2.jpg'
                srcSet='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075364/BEN_Website/blog/VolunteeringTC/BEN_orientation2.jpg'
                loading='lazy'
                alt='Checking into the meeting'
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075443/BEN_Website/blog/VolunteeringTC/BEN_orientation3.jpg'
                srcSet='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075443/BEN_Website/blog/VolunteeringTC/BEN_orientation3.jpg'
                loading='lazy'
                alt='CSULB Tzu Ching advisors smiling for the camera'
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/v1645075443/BEN_Website/blog/VolunteeringTC/BEN_orientation4.jpg'
                srcSet='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645076614/BEN_Website/blog/VolunteeringTC/BEN_orientation4.jpg'
                loading='lazy'
                alt='Attendees at the general meeting'
              />
            </ImageListItem>
          </ImageList>
          <h2 className={classes['blog__header']}>
            Revitalizing CSULB Tzu Ching / Current Times
          </h2>
          <p>
            From that point on, CSULB Tzu Ching experienced success in its
            events, with many members attending and gaining more interest in our
            organization's values. I was grateful that the advisors and I
            inspired a new generation of officers for the next school year. When
            the school year ended, CSULB Tzu Ching continued functioning for the
            following years, and as I write this, it still functions. I'm glad
            that my officer journey ended on a high note. As an alumnus, I
            continue to support this organization, whether by maintaining the
            CSULB Tzu Ching website, providing photography at events, or
            advising current officers.
          </p>
          <p>
            If there is anything that I've learned during my journey, it's this:{' '}
            <em>
              Don't give up to avoid things getting worse, but instead, don't
              give up so that you allow things to get better.
            </em>
          </p>
          <ImageList variant='masonry' cols={1} gap={10}>
            <ImageListItem>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_socialdaygroup.jpg'
                srcSet='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_socialdaygroup.jpg'
                loading='lazy'
                alt='All members at the social posing in front of the Walter Pyramid'
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_keychain.jpg'
                srcSet='https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_600/v1645075275/BEN_Website/blog/VolunteeringTC/BEN_keychain.jpg'
                loading='lazy'
                alt='"I Heart TC" keychain'
              />
            </ImageListItem>
          </ImageList>
          <h2 className={classes['blog__header']}>Special Thanks</h2>
          <p>
            I dedicate this blog to the following who have been with me through
            this journey:
          </p>
          <ul>
            <li>
              <strong>Lily and Weili</strong> - these two were the founders of
              CSULB Tzu Ching. They've made sure that I wouldn't handle the
              organization all on my own. Without their valuable advice, we
              wouldn't be able to make the 2019-2020 school year a successful
              one.
            </li>
            <li>
              <strong>Jessica</strong> - she took the initiative in being the
              president when we were experiencing down times. She had more
              experience in leadership and managing the organization than I
              have, so I looked up to and learned from her so I could one day
              lead CSULB Tzu Ching.
            </li>
            <li>
              <strong>UCI Tzu Ching</strong> - I've developed deep relationships
              with them, which also opened the door to collaborations that are
              happening to this day. I've been to many of their events, and in
              turn, they've considered me as an honorary UCI Tzu Ching member.
            </li>
            <li>
              <strong>Shi Gu's and Shi Buo's</strong> - these are Tzu Chi
              volunteers who continuously provided help with our events, such as
              bringing food at meetings, helping attract new members, and
              organizing events for CSULB Tzu Ching to attend.
            </li>
            <li>
              <strong>Samanta, Victoria, Vivienne</strong> - the president, vice
              president, and secretary of CSULB Tzu Ching for the 2020-2021
              school year, respectively. They took the opportunity to become
              officers and help the organization grow for another year after I
              graduated. Not only have I inspired them, but they have also
              inspired me.
            </li>
          </ul>
        </div>
      </PageContainer>
    </AnimatedPage>
  );
};

export default VolunteeringTC;
