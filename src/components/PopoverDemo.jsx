// this is the popover component, as presented in the Radix Getting Started tutorial
import * as React from "react";
import * as Popover from "@radix-ui/react-popover";
// import styles module (no destructuring)
import popoverStyles from "@/components/PopoverDemo.module.css";
import Link from "next/link";

const PopoverDemo = () => (
  <Popover.Root>
    <Popover.Trigger className={popoverStyles.PopoverTrigger}>
      Do you still want more info about this coaster?
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content className={popoverStyles.PopoverContent}>
        <Link href="https://en.wikipedia.org/wiki/Roller_coaster">
          Learn more about it here!
        </Link>
        <Popover.Arrow className={popoverStyles.PopoverArrow} />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default PopoverDemo;
