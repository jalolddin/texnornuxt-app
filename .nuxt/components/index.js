export { default as GeneralBannerWithBlueBlock } from '../..\\components\\sections\\general\\GeneralBannerWithBlueBlock.vue'
export { default as GeneralBannerWithGreyGradient } from '../..\\components\\sections\\general\\GeneralBannerWithGreyGradient.vue'
export { default as GeneralBigImageWithLeftTitle } from '../..\\components\\sections\\general\\GeneralBigImageWithLeftTitle.vue'
export { default as GeneralForm } from '../..\\components\\sections\\general\\GeneralForm.vue'
export { default as GeneralSmallBlueRow } from '../..\\components\\sections\\general\\GeneralSmallBlueRow.vue'
export { default as GeneralSystemComplex } from '../..\\components\\sections\\general\\GeneralSystemComplex.vue'
export { default as IndexClients } from '../..\\components\\sections\\index\\IndexClients.vue'
export { default as IndexDirections } from '../..\\components\\sections\\index\\IndexDirections.vue'
export { default as IndexMentions } from '../..\\components\\sections\\index\\IndexMentions.vue'
export { default as IndexMore } from '../..\\components\\sections\\index\\IndexMore.vue'
export { default as IndexPartners } from '../..\\components\\sections\\index\\IndexPartners.vue'
export { default as IndexTasks } from '../..\\components\\sections\\index\\IndexTasks.vue'
export { default as IndustriesCallToAction } from '../..\\components\\sections\\industries\\CallToAction.vue'
export { default as IndustriesFAQ } from '../..\\components\\sections\\industries\\FAQ.vue'
export { default as IndustriesForWho } from '../..\\components\\sections\\industries\\ForWho.vue'
export { default as IndustriesHowItWork } from '../..\\components\\sections\\industries\\HowItWork.vue'
export { default as IndustriesLoss } from '../..\\components\\sections\\industries\\Loss.vue'
export { default as IndustriesSolutions } from '../..\\components\\sections\\industries\\Solutions.vue'
export { default as IndustriesSystemInterface } from '../..\\components\\sections\\industries\\SystemInterface.vue'
export { default as IndustriesTurnkey } from '../..\\components\\sections\\industries\\Turnkey.vue'
export { default as ProductionDocumentation } from '../..\\components\\sections\\production\\ProductionDocumentation.vue'
export { default as ProductionInfoAndSlider } from '../..\\components\\sections\\production\\ProductionInfoAndSlider.vue'
export { default as ProductionOthersLinks } from '../..\\components\\sections\\production\\ProductionOthersLinks.vue'
export { default as ProductionSliderOneItemGreyBackground } from '../..\\components\\sections\\production\\ProductionSliderOneItemGreyBackground.vue'
export { default as CalculatorCalculate } from '../..\\components\\sections\\calculator\\CalculatorCalculate.vue'
export { default as CalculatorContact } from '../..\\components\\sections\\calculator\\CalculatorContact.vue'
export { default as CalculatorIntro } from '../..\\components\\sections\\calculator\\CalculatorIntro.vue'
export { default as DemonstrationDemonstratIntro } from '../..\\components\\sections\\demonstration\\DemonstratIntro.vue'
export { default as DemonstrationDemonstratTabs } from '../..\\components\\sections\\demonstration\\DemonstratTabs.vue'
export { default as DemonstrationFourthTab } from '../..\\components\\sections\\demonstration\\fourthTab.vue'
export { default as DemonstrationInfoSlider } from '../..\\components\\sections\\demonstration\\InfoSlider.vue'
export { default as DemonstrationSecondTab } from '../..\\components\\sections\\demonstration\\secondTab.vue'
export { default as DemonstrationThirdTab } from '../..\\components\\sections\\demonstration\\thirdTab.vue'
export { default as SvgTasks } from '../..\\components\\svg\\SvgTasks.vue'
export { default as CommonLocales } from '../..\\components\\common\\CommonLocales.vue'
export { default as CommonLogo } from '../..\\components\\common\\CommonLogo.vue'
export { default as CommonSocials } from '../..\\components\\common\\CommonSocials.vue'
export { default as CommonTabsButtons } from '../..\\components\\common\\CommonTabsButtons.vue'
export { default as HeaderBottom } from '../..\\components\\header\\HeaderBottom.vue'
export { default as HeaderDropdown } from '../..\\components\\header\\HeaderDropdown.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Overlay } from '../..\\components\\Overlay.vue'
export { default as SectionsConsultationContent } from '../..\\components\\sections\\consultation\\ConsultationContent.vue'
export { default as SectionsConsultationIntro } from '../..\\components\\sections\\consultation\\ConsultationIntro.vue'
export { default as SectionsConsultationSlide } from '../..\\components\\sections\\consultation\\ConsultationSlide.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
