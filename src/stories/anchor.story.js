import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {withKnobs, boolean, button, number, object, select, text} from '@storybook/addon-knobs';


import PLink from '../Components/Anchor/PLink';
import PAnchor from '../Components/Anchor/PAnchor';


const stories = storiesOf('Anchor', module);
stories.addDecorator(withKnobs);

stories.add('Basic Anchor', withInfo('Setting Affix value to False will make Anchor fixed')(() => (
    <div>
        <PAnchor affix={boolean('Affix', true)}>
            <PLink href="#story" title="story"/>

            <PLink href="#primary-paragraph" title="primary-paragraph">
                <PLink href="#secondary-paragraph" title="secondary-paragraph"/>
            </PLink>
        </PAnchor>

        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deleniti dolorem ea explicabo fuga maiores
                numquam omnis reprehenderit veritatis voluptatem. Accusamus architecto delectus doloribus eum excepturi
                nam nisi perferendis perspiciatis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
                cum dolore eaque esse incidunt, neque nostrum omnis suscipit! At delectus eius fugit iste ratione sequi
                suscipit totam? Eaque, laboriosam, ratione!</p>
        </div>

        <div id="story">
            <h1>Story</h1>
            <h3>Anchor Pointing to Story</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores culpa fugit incidunt neque pariatur
                praesentium quia temporibus velit voluptates? Culpa delectus distinctio dolorem facilis impedit in
                maxime recusandae similique sunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet
                cumque eveniet explicabo maiores neque, odio officiis pariatur quasi repellendus suscipit ut veritatis
                voluptatem. Accusamus dicta eaque esse ipsum tempora. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aliquid animi ea hic perspiciatis quis reiciendis, rem! Accusantium commodi cum hic
                illo laudantium obcaecati porro, rem veniam! Assumenda maxime perspiciatis sit?</p>
        </div>


        <div id="primary-paragraph">
            <h1>Primary Paragraph</h1>
            <h3>Watch the anchor pointing to primary paragraph</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi earum illum molestiae molestias nemo
                quasi quia! Culpa delectus dolores dolorum eius eos eveniet, impedit ipsa magni nesciunt nihil quidem
                reprehenderit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at aut eaque esse, et
                eveniet excepturi, ipsa, iste iusto officia reprehenderit repudiandae sunt vitae. Ab eaque id labore
                nesciunt sit! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorem doloribus
                praesentium quod veritatis. A accusantium aliquid amet autem debitis, expedita hic laudantium nemo, nisi
                odio officiis repellat sed vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                aspernatur consectetur dignissimos dolorem ea earum enim est facere, harum hic necessitatibus
                perspiciatis repellendus ullam vel veritatis. Molestiae obcaecati perferendis rem. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Ab accusamus accusantium, amet aspernatur assumenda atque commodi
                corporis dicta ea id itaque, neque, placeat quae quaerat rem reprehenderit sapiente soluta tempora.</p>
        </div>

        <div id="secondary-paragraph">
            <h1>Secondary Paragraph</h1>
            <h3>Watch the anchor pointing to Secondary Paragraph</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi, beatae dignissimos et fuga
                fugit incidunt ipsam laborum libero obcaecati officia placeat, quisquam quo recusandae repellat vel
                voluptate? Nostrum, sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum officia, ullam?
                Adipisci amet architecto delectus, dicta excepturi exercitationem fuga ipsam iure mollitia nemo odio
                provident saepe sequi totam ut velit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque
                blanditiis consequuntur corporis distinctio, enim et exercitationem facilis incidunt laudantium libero
                natus officiis optio quibusdam quo vitae voluptate. Aut, explicabo. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Alias dolores illum nihil provident! Ab alias architecto culpa eius
                excepturi laborum magni, nisi obcaecati provident quaerat quas, repellat saepe sed tempora? Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Expedita explicabo minus omnis pariatur possimus quidem
                rem repudiandae. Commodi cum doloremque eaque eos, excepturi id illo libero magni maiores, quisquam
                vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim explicabo illum libero
                maxime molestiae quidem saepe tempore. Asperiores harum inventore laudantium officiis ratione. Adipisci
                aspernatur molestiae qui reiciendis tenetur!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi, beatae dignissimos et fuga
                fugit incidunt ipsam laborum libero obcaecati officia placeat, quisquam quo recusandae repellat vel
                voluptate? Nostrum, sed! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum officia, ullam?
                Adipisci amet architecto delectus, dicta excepturi exercitationem fuga ipsam iure mollitia nemo odio
                provident saepe sequi totam ut velit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque
                blanditiis consequuntur corporis distinctio, enim et exercitationem facilis incidunt laudantium libero
                natus officiis optio quibusdam quo vitae voluptate. Aut, explicabo. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Alias dolores illum nihil provident! Ab alias architecto culpa eius
                excepturi laborum magni, nisi obcaecati provident quaerat quas, repellat saepe sed tempora? Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Expedita explicabo minus omnis pariatur possimus quidem
                rem repudiandae. Commodi cum doloremque eaque eos, excepturi id illo libero magni maiores, quisquam
                vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur enim explicabo illum libero
                maxime molestiae quidem saepe tempore. Asperiores harum inventore laudantium officiis ratione. Adipisci
                aspernatur molestiae qui reiciendis tenetur!</p>
        </div>
    </div>

)));


