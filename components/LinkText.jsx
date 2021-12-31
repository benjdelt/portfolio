import Link from 'next/link';

function LinkText({ href, children }) {
  // There is an issue where the Next Link component is passed multiple children when used
  // with the Trans component from next-i18next.
  return <Link href={href || ""}>{children[0]}</Link>;
}

export default LinkText;
